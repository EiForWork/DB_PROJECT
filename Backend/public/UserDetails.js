const mongoose = require('mongoose')
const UserDetailsSch = new mongoose.Schema(
    {
        fname:String,
        sname:String,
        phone:String,
        sex:String,
        country:String,
        Birthday:Date,
        email:{type:String,unique:true},
        password:String,
        cpassword:String,
    },
    {
        collection:"customers",
        versionKey: false
    }
);

mongoose.model("UserInfo",UserDetailsSch)
