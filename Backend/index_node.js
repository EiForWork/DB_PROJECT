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
const { decode } = require('punycode');
const {v4:uuidv4 } = require('uuid')
// const env = require('dotenv');
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51OLLwFH1Rn2e5SsUrhRWBAymo6rPWDTlMxelVcKZNarsan1iorMrUHcjY6y8yglJjTJFPFj4uX2bKfrAI4OrC42q00AYIFyWAg');
const endpointSecret = "whsec_83e9f3fd09a0cf17e6b2b8e305b5d34263a707849f548e80a6f0cfac0882f6ac";

// require('dotenv').config()


// // require('dotenv').config()


//Middleware // Session Setting
app.use(session({
    secret:"YourSession",
    resave:false,
    saveUninitialized:false
}))

// app.use(bodyParser.json());

app.use(cookieParser())
app.use(cors(
    {
        origin:["http://localhost:5173"], //อนูญาตให้แค่localhostตัวนี้ยิงมาได้
        methods:['POST','GET'],
        credentials:true
        
    }
)) // For CrossDomain

app.use(express.static(path.join(__dirname,'public')))



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

//WEBHOOK
app.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature']

  let event

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret)
  } catch (err) {
    console.log("Webhook Error",err)
    res.status(400).send(`Webhook Error: ${err.message}`)
    return
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const paymentSuccessData = event.data.object
      const sessionId = paymentSuccessData.id
      console.log(paymentSuccessData,sessionId+"FROM WEBHOOKKKKKKKKKKKKKK")
      const data = {
        status: paymentSuccessData.status
      }

      const result = await connection.query(
        'UPDATE orders_info SET ? WHERE session_id = ?',
        [data, sessionId]
      )

      console.log('=== update result', result)

      // event.data.object.id = session.id
      // event.data.object.customer_details คือข้อมูลลูกค้า
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send()
})
app.use(express.json())







//next is a middleware if we will call
const verifyUser = (req,res,next) => {
    const token = req.cookies.token;
    req.UserID = decode.UserID;
    if(!token){
        return res.json({message:"We need token"})
    }else{
        jwt.verify(token,"our-jsonwebtoken-secret-key",(err,decode)=>{
            if(err){
                return res.json({message:"Auten error"})
            }else{
                req.UserID = decode.UserID;
                console.log("We get the token"+req.UserID)
                next();
            }
        })
    }
}

app.get('/logout', (req, res) => {
    res.clearCookie('token', { path: '/', domain: 'localhost' });
    return res.status(200).json({ status: 200 });
});


app.get('/', verifyUser, (req, res) => {
    return res.status(200).json({ status: "bobby", UserID: req.UserID });
});




//REGISTER ZONE
const insertData = "INSERT INTO customer(fname,lastname,phone,sex,country,birthday,email,password) VALUES (?,?,?,?,?,?,?,?)";

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
let FindUser = "SELECT email,password FROM customer WHERE email = ?";
let FindID  = "SELECT id FROM customer WHERE email = ?"
app.post("/login", async (req, res) => {
    const { takeEmail, takePassword } = req.body;
    connection.query(FindUser, [takeEmail], async (err, result) => {
      // Checking Error
      if (err) {
        console.error("Error during login:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      try {
        if (result.length > 0) {
          const hashedPassword = result[0].password;
  
          // Use bcrypt.compare() to compare the passwords
          const passwordMatch = await bcrypt.compare(takePassword, hashedPassword);
  
          if (passwordMatch) {
            connection.query(FindID, [takeEmail], (err, result) => {

              if (err) {
                return res.status(401).json({ message: "Can't pull ID" });
              }
                const UserID = result[0].id;
                const token = jwt.sign({UserID},
              "our-jsonwebtoken-secret-key",{expiresIn: "1d"});
              console.log(UserID,token,result)
              res.cookie('token',token);
              return res.status(200).json({ message: "Login successful", status: "Success" });
              //SUCCESS
            });
          } else {
            return res.status(401).json({ message: "Invalid email or password" });
          }
        } else {
          return res.status(401).json({ message: "Email not found" });
        }
      } catch (err) {
        return res.json({ message: "Query Data has a problem" });
      }
    });
  });

const getUserData = "   SELECT fname,lastname,phone,email FROM customer WHERE id = ? "
// Get user data route
app.get("/getuserdata",verifyUser, (req, res) => {
  const userID = req.UserID;
  // console.log(userID + " Value in cookie from middleware");
    connection.query(getUserData, [userID], (err, result) => {
      if (err) {
        return res.json({ message: "Internal Server Error" });
      }
  
      if (result.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      const userData = {
        fname: result[0].fname,
        lastname: result[0].lastname,
        phone: result[0].phone,
        email: result[0].email,
      };
      // console.log(userData)
      return res.status(200).json(userData);
    });
  });
  

  const updateInfomation = "UPDATE customer SET fname = ?, lastname = ?, phone = ? WHERE id = ?";

  // PROFILE CONFIGURATION
  app.post("/updateprofile", verifyUser, (req, res) => {
    const { name, last, phone } = req.body;
    console.log(req.body)
    const userID = req.UserID;
  
    //แนะนำว่าควรชื่อเดียวกันกับที่ส่งมา หรือในดาต้าเบส
    connection.query(updateInfomation, [name, last, phone, userID], (err, result) => { 
      if (err) {
        return res.json({ message: "UPDATE ERROR" });
      }
  
      return res.json({ message: "Profile updated successfully",status:200 });
    });
  });




const FindEmail ="SELECT email FROM customer WHERE id = ?"
//ok
app.post("/api/checkout",express.json(),async(req,res)=>{


  try{

// //Find Email
// const userID = req.UserID;
// connection.query(FindEmail,[userID],(err,result)=>{
//   if(err) return res.json({message:"Internal Server Error"})

// })


  const {user,product} = req.body
  // const {BookingData} = req.body
  // const {users} = req.body
  // const {User,products} = req.body
  const orderID = uuidv4()
  //Use API KEY SECRET KEY
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'thb',
          product_data: {
            name:user.email, //Fix this
          },
          unit_amount:product.price*100,  //Price Hotel
        },
        quantity: product.quantity,  //All Amout
      },
    ],
    mode: 'payment',
    success_url : `http://localhost:8081/success.html?id=${orderID}`,
    cancel_url : `http://localhost:8081/fail.html?id=${orderID}`
  });

// Store in database
const orderData = {
  email: user.email,
  session_id: session.id,
  order_id: orderID,
  status: session.status,
  check_in: user.checkin,
  check_out:user.checkout,
  Details:user.detail,
  TotalPrice:user.total
}


console.log(session,user.checkin)

 connection.query('INSERT INTO orders_info SET ?',orderData,(err,result)=>{
  if(err){console.log(err)}
  res.json({user,product,result,err})
 })

}catch(err){
  console.log(err,"error something")
  res.status(400).json({message:"Something Wrong"})
}
})
  



app.get('/api/orders/:id',async(req,res)=>{
  const orderId = req.params.id
  console.log(orderId+"FROMMMMMM API ODER ID")
  try{
    connection.query('SELECT * FROM orders_info WHERE order_id = ?',orderId,(err,result)=>{
      const results = result[0]
      res.json({order:results});
    });
  }catch(err){
    console.log(err)
    res.status(400).json({message:"Something Wronggg"})
  }
})



//GOT EMAIL
app.get("/getemail",verifyUser,(req,res)=>{
  const userID = req.UserID;
  connection.query("SELECT email FROM customer WHERE id = ?",[userID],(err,result)=>{
    if(err) throw err;
    const Useremail =result[0].email
    return res.json({Useremail})
  })
})



app.use(router)

app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})