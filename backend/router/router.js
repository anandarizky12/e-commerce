
const express = require('express');
const {isAuth, isAdmin} = require('../utils/utils');
const {getProducts} = require('./products');
const {getDetails} = require('./products');
const {createProduct} = require('./products');
const router = express.Router();

router.get('/products',getProducts);
router.get('/:id',getDetails);
router.post('/create',createProduct);


module.exports = router;