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
}
