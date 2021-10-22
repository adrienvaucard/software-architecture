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

    createForm : (req, res) => {
        res.render('createProduct');
    },

    create : (req, res) => {
        try {
            productService.create(req.body);
            res.redirect('/product/list');
        }catch(e){
            res.render('createProduct' , {message : e.message});
        }
    },

    editForm : (req, res) => {
        if (!req.params.id) throw new Error("None ID specified")
        let foundProduct = productService.findById(req.params.id)

        res.render('editProduct', {
            product : foundProduct
        });
    },

    edit : (req, res) => {
        console.log(req.params.id)
        let foundProduct = productService.findById(req.params.id)

        try {
            productService.edit(req.params.id, foundProduct);
            res.redirect('/product/list');
        } catch(e){
            console.log(e)
            res.render('editProduct' , {
                message : e.message,
                product : foundProduct
            });
        }
    },
}
