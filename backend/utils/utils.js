const jwt = require('jsonwebtoken');

require('dotenv').config({path: "../.env"});

const getToken = (user)=>{
    return jwt.sign(
        {
            _id:user._id,
            username : user.username,
            email : user.email,
            isAdmin : user.isAdmin,
        }, process.env.JWT_SECRET,{
        expiresIn : '12h'
    })
}

module.exports = getToken;