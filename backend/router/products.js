const data = require('../Data')
const  productModel = require('../models/productModel')

const getProducts=(req,res)=>{
//     const category = req.query.category ? { category: req.query.category } : {};
//     const searchKeyword = req.query.searchKeyword
//     ? {
//         name: {
//           $regex: req.query.searchKeyword,
//           $options: 'i',
//         },
//       }
//     : {};
//   const sortOrder = req.query.sortOrder
//     ? req.query.sortOrder === 'lowest'
//       ? { price: 1 }
//       : { price: -1 }
//     : { _id: -1 };
//   const products = await Product.find({ ...category, ...searchKeyword }).sort(
//     sortOrder
//   );
  res.send(data.products);
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
module.exports = {getProducts, getDetails}