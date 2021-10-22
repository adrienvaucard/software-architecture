const productDAO = require('../dao/ProductDAO');

module.exports = {

    list : () => {
        return productDAO.list()
    },

    listById : () => {
        return productDAO.listById()
    },

    listByName : () => {
        return productDAO.listByName()
    },

    listByPrice : () => {
        return productDAO.listByPrice()
    },

    findById : (id) => {
        return productDAO.findById(id)
    },

    create: (product) => {
        return productDAO.create(product)
    },

    edit: (id, product) => {
        return productDAO.edit(id, product)
    }
}
