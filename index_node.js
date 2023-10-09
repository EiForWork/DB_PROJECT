const express = require('express')
const router = express.Router()
const app = express()
const path = require('path')

app.use(express.static('page_all/home_main'))
app.use('/page_all/home_main',express.static('home_main'))

const fuck = path.join(__dirname,"page_all/home_main/home.html")



router.get("/",(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(fuck)
})

app.use(router)

app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})