
const express = require('express');
const {createAdmin, signIn, registerUser,  getAllUsers } = require('./users');
const router = express.Router();

router.get('/', getAllUsers )
router.get('/createadmin',createAdmin)
router.post('/signin',signIn);
router.post('/register',registerUser);


module.exports = router;