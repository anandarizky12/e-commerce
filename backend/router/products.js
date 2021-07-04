const data = require('../Data')
const  productModel = require('../models/productModel')

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
    const { id } = req.params;
  
    try {
        const details = await data.products.find((data=>data._id == id))
        
        res.status(200).json(details);
    } catch (error) {
        res.status(404).json({ message: error.message });
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


module.exports = {getProducts, getDetails, createProduct, updateProduct}