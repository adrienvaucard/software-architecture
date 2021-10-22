const productService = require('../services/ProductService');

module.exports = {
    list : (req, res) => {
        let productsList = productService.list()
        console.log(productsList)
        res.render('list.ejs', {
            productsList: productsList
        });
    },
}
