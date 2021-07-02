const User = require('../../models/User')
const getToken = require('../../utils/utils');


const getAllUsers = async (req , res)=>{
    try {
        const users = await User.find().sort({_id:-1});
                
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

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
const createAdmin = async (req,res)=>{
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
const registerUser = async (req,res)=>{
    const {username, email,password} = req.body;
    try {
        const user = new User({
            username, email, password
        });

        const newUser  = await user.save();
        res.send({newUser,info:"User Successfully Create"})
    } catch (error) {
        res.send({msg:error.message})
    }
}

module.exports = {signIn , createAdmin ,registerUser ,  getAllUsers }