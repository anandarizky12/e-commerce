const data = require('../Data')

function getProducts(req,res){
    res.send(data.products)
}

module.exports = getProducts