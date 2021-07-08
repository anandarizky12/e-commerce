const data = require('../Data')
const  productModel = require('../models/productModel')
const mongoose  = require('mongoose')




const getProducts=async(req,res)=>{
    const category = req.query.category ? { category: req.query.category } : {};
    const searchKeyword = req.query.searchKeyword
    ? {
        name: {
          $regex: req.query.searchKeyword,
          $options: 'i',
        },
      }
    : {};
  const sortOrder = req.query.sortOrder
    ? req.query.sortOrder === 'lowest'
      ? { price: 1 }
      : { price: -1 }
    : { _id: -1 };
  const products = await  productModel.find({ ...category, ...searchKeyword }).sort(
    sortOrder
  );
  res.send(products);
}

const getDetails = async (req, res) => { 
  const product = await  productModel.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found.' });
  }
  }
  
const createProduct = async (req, res)=>{
  const product = new productModel({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    stock: req.body.stock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  })
  const newProduct = await product.save();
  if(newProduct){
    return res.status(201).send({message : "New Product Successfully Created", data : newProduct});
  }
  return res.status(500).send({message : "Product create failed"});
}


const updateProduct= async (req, res) => {
  const productId = req.params.id;
  const product = await productModel.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.brand = req.body.brand;
    product.category = req.body.category;
    product.stock = req.body.stock;
    product.description = req.body.description;
    const updatedProduct = await product.save();
  
    if (updatedProduct) {
    
      return res
        .status(200)
        .send({success : true,  message: 'Product Updated', data: updatedProduct });
      
    }
  }
  return res.status(500).send({success : false, message: ' Error in Updating Product.' });
};

const deleteProduct= async (req, res) => {
    const { id } = req.params;
        await productModel.findByIdAndRemove(id);

        res.json({ message: "Post deleted successfully." });
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

};

const reviewProduct = async (req, res) => {
  const product = await productModel.findById(req.params.id);
 
  if (product) {

    const review = {
      name: req.body.name,
      userId : req.body.userId,
      rating: Number(req.body.rating),
      comment: req.body.comment,
    };
  
    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((a, c) => c.rating + a, 0) /
      product.reviews.length;
    const updatedProduct = await product.save();
    res.status(201).send({
      data: updatedProduct.reviews[updatedProduct.reviews.length - 1],
      message: 'Review saved successfully.',
    });
  } else {
  
    res.status(404).send({ message: 'Product Not Found or Your Already comments' });
  }
};


module.exports = {getProducts, getDetails, createProduct, updateProduct, deleteProduct, reviewProduct}