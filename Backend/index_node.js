const express = require('express')
const path = require('path')
const router = express.Router()
const app = express()
const session = require('express-session');
const cors = require('cors')
const bcrypt = require('bcrypt')
const mysql = require('mysql')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { verify } = require('crypto');
const { decode } = require('punycode');


//Middleware // Session Setting
app.use(session({
    secret:"YourSession",
    resave:false,
    saveUninitialized:false
}))


app.use(express.json())
app.use(cors(
    {
        origin:["http://localhost:5173"], //อนูญาตให้แค่localhostตัวนี้ยิงมาได้
        methods:['POST','GET'],
        credentials:true
        
    }
)) // For CrossDomain

app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser())


// MySQL CONNECTION
const connection = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"root", //MAMP,
    database:'bisshotella',
    port:'8889'
})
//Catching Error
connection.connect((err)=>{
    if(err){
        console.log("Error connecting with Database, Please recheck your server ")
        return ;
    }
    console.log("Success Connected")
})



const verifyUser = (req,res,next) => {
    const token = req.cookie.token;
    if(!token){
        return res.json({message:"We need token"})
    }else{
        jwt.verify(token,"our-jsonwebtoken-secret-key",(err,decode)=>{
            if(err){
                return res.json({message:"Auten error"})
            }else{
                req.id = decode.name;
                next();
            }
        })
    }
}

app.get("/",verifyUser,(req,res)=>{
    return res.json({Status:"Success",id:req.id})
})



//REGISTER ZONE
const insertData = "INSERT INTO customer(fullname,lastname,phone,sex,country,birthday,email,password) VALUES (?,?,?,?,?,?,?,?)";
const CheckEmail = "SELECT email FROM customer WHERE email = ?";

app.post("/register", async (req, res) => {
    const { Name, Surname, phone, sex, country, birthday, email, password } = req.body;
    //Hashing Password Before the Send //hash,salt

    const passwordHash = await bcrypt.hash(password,10)
    
    try{
    // Continue with the registration process if email is not found
    connection.query(insertData, [Name, Surname, phone, sex, country, birthday, email,passwordHash], (err, results, fields) => {
        if (err) {
        return res.status(400).json({ message: "Email is already in use",status:400 });
        }
        return res.status(201).json({ message: "Inserting Success!", status: 201 });
        }
    )
    }catch(err){
       return res.json({message:"Error"})
    }
})




// LOGIN ZONE
let FindUser = "SELECT email, password FROM customer WHERE email = ? AND password = ?";
let FindID  = "SELECT id FROM customer WHERE email = ?"
app.post("/login", async (req, res) => {
  const { takeEmail, takePassword } = req.body;
  const timeExpire = 30000
  connection.query(FindUser, [takeEmail, takePassword], (err, result) => {
    // Checking Error
    if (err) {
      console.error("Error during login:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    // Check if the user is found and the password matches
    try{
        const checkUser = result.find(result => result.email === takeEmail && result.password === takePassword)
      if (checkUser) {
        connection.query(FindID,[takeEmail],(err,result)=>{ 
            if(err){ return res.status(401).json({message:"Cant pull ID"}) }
            
            // Access the id property of the first result
            const userId = result[0].id;
            const token = jwt.sign({userId},"our-jsonwebtoken-secret-key",{expiresIn:'1d'})
            res.cookie('token',token)
        return res.status(200).json({ message: "Login successful",status:"Success"});
        })
      } else {
        return res.status(401).json({ message: "Invalid email or password" });
      }
    }
    catch(err){
        return res.json({message:"Query Data is have problem"})
    }
  
  });
})
// try{
//     const { email, password } = req.body;
//     const [results] = await connection.query(FindUser,[email])
//     const userdata = results[0]
//     const match = bcrypt.compare(password,userdata.password)
//     if(!match){ 
//         res.status(400).json({message:"login fail"})
//         return ;
//     }
//     res.json({message:"login success"})

// }catch(err){
//     res.json({message:"Error"})
// }




// connection.query(FindUser,[email,password],(err,results)=>{
  
//     if(err){return res.json({message:"Server Side Error"})}

//     if(results.length > 0 ){
//         const id = results[0].id
//         const token = jwt.sign({id},"our-hee-scret",{expiresIn:'1d'})
//         res.cookie('token',token);
//         return res.json({status:"Success"})
//     }else{
//         return res.json({message:"No records Exits"})
//     }
//   })











app.use(router)

app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})