
const express = require('express')
const getProducts = require('./products')
const router = express.Router();

router.get('/products',getProducts)


module.exports = router;