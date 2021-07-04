const jwt = require('jsonwebtoken');

require('dotenv').config({path: "../.env"});

const getToken = (user) =>{
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

class errorResponse extends Error{
  constructor(message,statusCode){
          super(message);
          this.statusCode = statusCode
  }
}


const isAuth = async (req, res, next) =>{

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        token = req.headers.authorization.split(" ")[1];
      }
    if (!token) {
        return next(new errorResponse("Not authorized to access this route", 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
        const user = await User.findById(decoded.id);
    
        if (!user) {
          return next(new errorResponse("No user found with this id", 404));
        }
    
        req.user = user;
    
        next();
      } catch (err) {
        return next(new errorResponse("Not authorized to access this router", 401));
      }

    
}


const isAdmin = (req, res, next) => {
    console.log(req.user);
    if (req.user && req.user.isAdmin) {
      return next();
    }
    return res.status(401).send({ message: 'Admin Token is not valid.' });
  };
  

module.exports = {getToken, isAdmin , isAuth};