const data = require('../Data')

const getProducts=(req,res)=>{
    res.send(data.products)
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