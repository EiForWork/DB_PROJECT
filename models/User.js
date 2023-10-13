const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    email:{
        type: String,
        require:[true,'Please enter email']
    },
    password:{
        type:String,
        require:[true,'Please enter password']
    }
})

UserSchema.pre('save',function(next){
    const user = this
    bcrypt.hash(user.password,10).then(hash => {
        user.password = hash
        next()
    }).catch((errors)=> {
        console.log("Error in hashing")
    })
})

const User = mongoose.model('User',UserSchema)
module.exports = User