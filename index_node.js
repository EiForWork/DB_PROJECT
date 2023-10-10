const express = require('express')
const { register } = require('module')
const router = express.Router()
const app = express()
const path = require('path')

app.use(express.static('page_all/home_main'))
app.use(express.static('page_all/Login_page'))
app.use(express.static('page_all/Register'))


app.use('/page_all/home_main',express.static('home_main'))


const home_page = path.join(__dirname,"page_all/home_main/home.html")
const login_page = path.join(__dirname,"page_all/Login_page/loginhtml")
const register_page = path.join(__dirname,"page_all/Register/register.html")

router.get("/",(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(home_page)
})

router.get("/login",(req,res)=>{
    res.sendFile(login_page)
})

router.get("/register",(req,res)=>{
    res.sendFile(register_page)
})


app.use(router)

app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})