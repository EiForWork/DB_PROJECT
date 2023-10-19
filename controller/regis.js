const express = require('express');

function submiter(){
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let phone = document.getElementById("phone").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let email = document.getElementById("email").value;
    let country = document.getElementById('country-select').value;
    let datebirth = document.getElementById("datebirth").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;

    const Register_sche = new mongoose.Schema({
        name:{type:String,require:true},
        surname:{type:String,require:true},
        phone:{type:String,require:true},
        gender:{type:String,require:true},
        email:{type:String,require:true},
        country:{type:String,require:true},
        datebirth:{type:Date,require:true},
        password:{type:String,require:true},
        confirmpassword:{type:String,require:true},
    })
    const use_register = new mongoose.model('customer',Register_sche)

    // สร้างข้อมูลที่จะบันทึกลงใน MongoDB
    const userData = new use_register({
        name,
        surname,
        phone,
        gender,
        email,
        country,
        datebirth,
        password,
        confirmpassword,
    });

    userData.save()
    .then((data)=>{
        console.log("Success")
    })
    .catch((error)=>{
        console.log(error);
    })   
}
module.exports = submiter;