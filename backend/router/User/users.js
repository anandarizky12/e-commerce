const User = require('../../models/User')
const getToken = require('../../utils/utils');


const signIn = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const signInUser = await User.findOne({
            email
        }).select("+password");;

        console.log(signInUser)
        if(signInUser){
            console.log('cek success')
            res.send({
                _id : signInUser.id,
                username : signInUser.username,
                email : signInUser.email,
                isAdmin : signInUser.isAdmin,
                token : getToken(user)
            })
        }

    } catch (error) {
        res.send({msg:error.message})
    }
}
const getUser= async (req,res)=>{
    try {
        const user = new User({
            username : "ilham",
            email : "ilham@gmail.com",
            password : "ddsdd",
            isAdmin : true
        });

        const newUser  = await user.save();
        res.send(newUser)
    } catch (error) {
        res.send({msg:error.message})
    }
}

module.exports = {getUser , signIn}