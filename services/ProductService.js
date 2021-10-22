const productDAO = require('../dao/ProductDAO');

module.exports = {

    list : () => {
        return productDAO.list()
    }
}
