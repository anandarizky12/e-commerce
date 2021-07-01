const mongoose = require('mongoose');


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
        password : {
            type : String,
            required : true,
            select: false
        },
        isAdmin : {
            type : Boolean ,
            required :true,
            default : false 
        }
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User