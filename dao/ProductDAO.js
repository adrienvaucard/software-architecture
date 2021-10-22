let PRODUCT_COUNT = 0
const arrayCompare = require('../utils/arrayCompare')

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

    // create : (user) => {
    //     user._id = -1;
    //     FAKE_DB.users.push(user);
    // }
}
