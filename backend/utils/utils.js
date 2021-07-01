const jwt = require('jsonwebtoken');

require('dotenv').config({path: "../.env"});

const getToken = (user)=>{
    return jwt.sign(user, process.env.JWT_SECRET,{
        expiresIn : '12h'
    })
}

module.exports = getToken;