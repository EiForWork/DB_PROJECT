console.log("Heeำ")
const mongoose = require('mongoose')

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

const use_register =  mongoose.model('uaassaa',Register_sche)

function submiter(req,res){
    let nameIn = document.getElementById("name").value;
    let surnameIn = document.getElementById("surname").value;
    let phoneIn = document.getElementById("phone").value;
    let genderIn = document.querySelector('input[name="gender"]:checked').value;
    let emailIn = document.getElementById("email").value;
    let countryIn = document.getElementById('country-select').value;
    let datebirthIn = document.getElementById("datebirth").value;
    let passwordIn = document.getElementById("password").value;
    let confirmpasswordIn = document.getElementById("confirmpassword").value;
    console.log("Pressed")
    // สร้างข้อมูลที่จะบันทึกลงใน MongoDB
    const userData = new use_register({
        name: nameIn,
        surname: surnameIn,
        phone: phoneIn,
        gender: genderIn,
        email: emailIn,
        country: countryIn,
        datebirth: datebirthIn,
        password: passwordIn,
        confirmpassword: confirmpasswordIn,
    });

    use_register.insertMany([userData])
}

module.exports = submiter;
