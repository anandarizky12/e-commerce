
const express = require('express')
const {getProducts} = require('./products')
const {getDetails} = require('./products')
const router = express.Router();

router.get('/products',getProducts)
router.get('/:id',getDetails)


module.exports = router;