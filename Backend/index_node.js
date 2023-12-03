const express = require('express')
const path = require('path')
const router = express.Router()
const app = express()
const mongoose = require('mongoose')
const session = require('express-session');
const flash = require('connect-flash');
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const JWT_SECRET = "fjghtuyoiuasdasdade()weqeifsdfsdjhfikefhkds"

app.use(cors())


mongoose.connect('mongodb+srv://bob:12345@cluster0.92uyxhl.mongodb.net/BissHotella',{
    useNewUrlParser : true,
}).then(()=>{
    console.log("Connected to Mongodb")
}).catch((e)=>{
    console.log("error in connection")
})

app.use(express.static(path.join(__dirname,'public')))







app.use(session({
    secret:"node secret"
}))
app.use(express.json())
app.set('view engine','ejs')


app.use(flash())


// User Schema
require("./public/UserDetails")

const User = mongoose.model("UserInfo");
app.post("/register",async(req,res)=>{
   const {fname,sname,email,phone,sex,country,Birthday,password,cpassword,} = req.body
   const encryptPassword = await bcrypt.hash(password,10)
   try{

    //find Email in Database
    const oldUser = await User.findOne({email})

    //if email is doubly its will return a error
    if(oldUser){
        return   res.send({status:400,error: "User Exists", message: "Email is already registered" });
    }
        await User.create({
            fname,
            sname,
            email,
            phone, 
            sex,
            country,
            Birthday,
            password:encryptPassword,
            cpassword,
        })
     res.send({status:"ok"})
    }catch(error){
     res.send({status:"NO OK"})
    }
});

//LOGIN API

app.post("/login",async(req,res)=>{

  const {email,password1} = req.body;

  const user = await User.findOne({email});
  if(!user){
    return   res.json({error: "User Not found",  });
}

    const passwordMatch = await bcrypt.compare(password1,user.password)

    if(passwordMatch){
    const token = jwt.sign({},JWT_SECRET);
    if(res.status(201)){
        return res.json({status:"OK",data:token})
    }else{
        return res.json({error:"Error"})
    }
}
res.json({staus:"Error",error:"Invalid Password"})
})



router.get("/", (req, res) => {
})









app.use(router)

app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})