const express = require('express')
const path = require('path')
const router = express.Router()
const app = express()
const session = require('express-session');
const cors = require('cors')
const bcrypt = require('bcrypt')
const mysql = require('mysql')
// const jwt = requrie('jwt')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


//Middleware // Session Setting
app.use(session({
    secret:"YourSession",
    resave:false,
    saveUninitialized:false
}))


app.use(express.json())

app.use(cors(
    {
        origin:["http://localhost:5173"],
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

connection.connect((err)=>{
    if(err){
        console.log("Error connecting with Database = ",err)
        return ;
    }
    console.log("Success Connected")
})


//REGISTER ZONE
const insertData = "INSERT INTO customer(fullname,lastname,phone,sex,country,birthday,email,password) VALUES (?,?,?,?,?,?,?,?)";
const CheckEmail = "SELECT email FROM customer WHERE email = ?";

app.post("/register", async (req, res) => {
    const { Name, Surname, phone, sex, country, birthday, email, password } = req.body;

    try{

    //Check Email for ensure its not doubly
    connection.query(CheckEmail, [email], (err, results, fields) => {
        if (err) {
            console.log("Error while checking email:", err);
            return res.status(500).json({ message: "Internal Server Error" });
        }

        const foundEmail = results.find(result => result.email === email);
        if (foundEmail) {
            return res.status(400).json({ message: "Your email is already in use",status:400});
        }

    // Continue with the registration process if email is not found
    connection.query(insertData, [Name, Surname, phone, sex, country, birthday, email, password], (err, results, fields) => {
        if (err) {
            console.log("Error while inserting:", err);
            return res.status(400).json({ message: "Error while inserting" });
        }

        return res.status(201).json({ message: "Inserting Success!", status: 201 });
    });


    })}catch(err){
        res.json({message:"Query Data is have problem"})
        }
});




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
});













app.use(router)

app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})