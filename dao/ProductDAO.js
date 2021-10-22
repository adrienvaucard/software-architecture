let PRODUCT_COUNT = 0
const arrayCompare = require('../utils/arrayCompare')
const { uuid } = require('uuidv4');

module.exports = {
    list: () => {
        let foundProducts = FAKE_DB.products
        return foundProducts;
    },

    listById: () => {
        let foundProducts = FAKE_DB.products.sort( arrayCompare.compare('id'))
        return foundProducts;
    },

    listByName: () => {
        let foundProducts = FAKE_DB.products.sort( arrayCompare.compare('name'))
        return foundProducts;
    },

    listByPrice: () => {
        let foundProducts = FAKE_DB.products.sort( arrayCompare.compare('price'))
        return foundProducts;
    },

    create : (product) => {
        let products = FAKE_DB.products;
        product._id = uuid()
        product.creation_date = new Date().toString();
        products.push(product);
        return products;
    }
}
