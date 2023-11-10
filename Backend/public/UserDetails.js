const mongoose = require('mongoose')
const UserDetailsSch = new mongoose.Schema(
    {
        fname:{type:String},
        sname:String,
        email:String,
        phone:String,
        sex:String,
        country:String,
        Birthday:Date,
        password:String,
        cpassword:String,
    },
    {
        collection:"customers",
        versionKey: false
    }
);

mongoose.model("UserInfo",UserDetailsSch)
