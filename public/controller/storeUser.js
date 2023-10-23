const User = require('../models/User')

module.exports = (req,res)=>{
    User.create(req.body).then(()=>{
        console.log("user created")
        res.redirect('/')
    }).catch((error)=>{
        // console.log(error.errors)
        if(error){
            const validationErrors = Object.keys(error.errors).map(key=>error.errors[key].message)
            req.flash('validationErrors',validationErrors)
            req.flash('data',req.body)
            return res.redirect('/login')
        }
    })
}