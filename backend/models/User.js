const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username : {
        type : String ,
        require : [true,"Please Input Username"]
    },
    email:{
        type : String,
        required : [true , "Please provide Email"],
        unique : true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please input  a valid E-mail"
        ],
    },
    password : {
        type : String,
        required : true,
        select : false
    },
    isAdmin : {
        type : Boolean ,
        required :true,
        default : false 
    }
})
//to check if the password modified or not
userSchema.pre("save", async function (next){
    if(!this.isModified("password")){
        next();
    }
    //if the password change then hash the data
    const salt = await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('users', userSchema);
module.exports = User