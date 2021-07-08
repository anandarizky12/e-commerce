
const express = require('express');
const {isAuth, isAdmin} = require('../utils/utils');
const {getProducts} = require('./products');
const {getDetails} = require('./products');
const {createProduct, updateProduct, deleteProduct, reviewProduct} = require('./products');
const router = express.Router();

router.get('/products',getProducts);
router.get('/:id',getDetails);
router.post('/create',createProduct);
router.put('/:id' ,updateProduct);
router.delete('/delete/:id' ,deleteProduct);
router.post('/:id/reviews', isAuth,reviewProduct);

module.exports = router;