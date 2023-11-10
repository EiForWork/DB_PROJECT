const express = require('express')
const path = require('path')
const router = express.Router()
const app = express()
const mongoose = require('mongoose')
const session = require('express-session');
const flash = require('connect-flash');
const cors = require('cors')
app.use(cors())


mongoose.connect('mongodb+srv://root:123qwe@cluster0.zzc35pw.mongodb.net/kuy',{
    useNewUrlParser : true,
}).then(()=>{
    console.log("connected to db")
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
   try{
        await User.create({
            fname,
            sname,
            email,
            phone,
            sex,
            country,
            Birthday,
            password,
            cpassword,
        })
     res.send({status:"ok"})
    }catch(error){
     res.send({status:"NO OK"})
    }
});


router.get("/", (req, res) => {
    res.status(200)
    res.render(home_page)
})

router.get("/login", (req, res) => {
    res.render(login_page,{
        errors:req.flash('validationErrors')
    })
})


router.get("/roomtypes", (req, res) => {
    res.status(200)
    res.type('text/css')
    res.render(roomtype_page)
})

router.get("/booking", (req, res) => {
    res.render(booking_page)
})


const regisSchema = new mongoose.Schema({
    name:{type:String,required:true}
})
const collection = new mongoose.model('Customers',regisSchema)

router.post("/submit",(req,res)=>{
});







app.use(router)

app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})