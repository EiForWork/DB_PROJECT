const express = require('express')
const path = require('path')
const router = express.Router()
const app = express()
const mongoose = require('mongoose')
const session = require('express-session');
const flash = require('connect-flash');
const storeCon = require('./controller/storeUser')


mongoose.connect('mongodb+srv://bob:12345@cluster0.92uyxhl.mongodb.net/',{
    useNewUrlParser : true,
}).then(()=>{
    console.log("connected to db")
}).catch(()=>{
    console.log("error in connection")
})

app.use(session({
    secret:"node secret"
}))
app.use(express.json())
app.set('view engine','ejs')
app.use(express.static('page_all/home_main'))
app.use(express.static('./page_all/Login_page/'))  
app.use(express.static('./page_all/Register/'))
app.use(express.static('./page_all/roomtypes/'))
app.use(express.static('./page_all/'))
app.use(flash())



const home_page = path.join(__dirname, '/page_all/home_main/home.ejs')
const login_page = path.join(__dirname, '/page_all/Login_page/login.ejs')
const register_page = path.join(__dirname, '/page_all/Register/register.ejs')
const roomtype_page = path.join(__dirname, '/page_all/roomtypes/roomtype.ejs')

app.post('/login',storeCon)

router.get("/", (req, res) => {
    res.status(200)
    res.type('text/html')
    res.sendFile(home_page)
})

router.get("/login", (req, res) => {
    res.render(login_page,{
        errors:req.flash('validationErrors')
    })
})

router.get("/register", (req, res) => {
    res.status(200)
    res.type('text/html')
    res.render(register_page)
})

router.get("/roomtypes", (req, res) => {
    res.type('text/html')
    res.render(roomtype_page)
})




app.use(router)

app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})