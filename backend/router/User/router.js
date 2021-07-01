
const express = require('express');
const {getUser} = require('./users');
const {signIn} = require('./users');

const router = express.Router();

router.get('/createadmin',getUser)
router.post('/signin',signIn);


module.exports = router;