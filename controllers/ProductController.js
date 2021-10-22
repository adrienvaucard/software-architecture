const productService = require('../services/ProductService');

module.exports = {
    list : (req, res) => {
        let productsList = []
        if (req.query.sort === '_id') {
            productsList = productService.listById()
        } else if (req.query.sort === 'name') {
            productsList = productService.listByName()
        } else if (req.query.sort === 'price') {
            productsList = productService.listByPrice()
        } else {
            productsList = productService.list()
        }
        
        res.render('list.ejs', {
            productsList: productsList
        });
    },
}
