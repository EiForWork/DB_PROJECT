const express = require('express')
const app = express()
const path = require('path')




app.use((req,res)=>{
    res.sendFile('')
})

app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})