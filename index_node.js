const express = require('express')
const path = require('path')
const router = express.Router()
const app = express()
const mongoose = require('mongoose')
const session = require('express-session');
const flash = require('connect-flash');
// const storeCon = require('./controller/storeUser')
const storeUser = require('./public/controller/regis')



mongoose.connect('mongodb+srv://bob:12345@cluster0.92uyxhl.mongodb.net/BissHotella',{
    useNewUrlParser : true,
}).then(()=>{
    console.log("connected to db")
}).catch(()=>{
    console.log("error in connection")
})

app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'public/home_main')))
app.use(express.static(path.join(__dirname,'public/Login_page')))
app.use(express.static(path.join(__dirname,'public/navbar_zone')))
app.use(express.static(path.join(__dirname,'public/roomtypes')))


const registrationSchema = new mongoose.Schema({
    nameIn: String,
    surnameIn: String,
    phoneIn: String
});




app.use(session({
    secret:"node secret"
}))
app.use(express.json())
app.set('view engine','ejs')


app.use(flash())



const home_page = path.join(__dirname, 'public/home_main/home.ejs')
const login_page = path.join(__dirname, 'public/Login_page/login.ejs')
const register_page = path.join(__dirname, 'public/Register/register.ejs')
const roomtype_page = path.join(__dirname, 'public/roomtypes/roomtype.ejs')
const booking_page = path.join(__dirname, 'public/booking/booking.ejs')



router.get("/", (req, res) => {
    res.status(200)
    res.render(home_page)
})

router.get("/login", (req, res) => {
    res.render(login_page,{
        errors:req.flash('validationErrors')
    })
})

router.get('/register', (req, res) => {
    res.render(register_page)
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