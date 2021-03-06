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

    findById: (id) => {
        let foundProduct = FAKE_DB.products.find((product) =>{
            return id === product._id;
        })
        return foundProduct
    },

    create : (product) => {
        let products = FAKE_DB.products;

        if (typeof(product.name) != 'string') {
            throw new Error("BAD_PARAMETERS - Name is not a string")
        } else {
            if (product.name.length < 3 || product.name.length > 100) {
                throw new Error("BAD_PARAMETERS - Name must be between 3 and 100 characters")
            }
        }

        if (typeof(Number(product.price)) != 'number') {
            throw new Error("BAD_PARAMETERS - Price must be a number")
        } else {
            if (Number(product.price) < 0) {
                throw new Error("BAD_PARAMETERS - Price must be superior to 0")
            }
        }

        product._id = uuid()
        product.creation_date = new Date().toString();
        products.push(product);
        return products;
    },

    edit : (id, product) => {
        console.log(product)
        let editedProduct = FAKE_DB.products.find((product) =>{
            return id === product._id;
        })

        console.log(editedProduct)

        if (!editedProduct.is === null) {
            throw new Error("Product doesn't exist")
        }

        if (typeof(editedProduct.name) != 'string') {
            throw new Error("BAD_PARAMETERS - Name is not a string")
        } else {
            if (editedProduct.name.length < 3 || editedProduct.name.length > 100) {
                throw new Error("BAD_PARAMETERS - Name must be between 3 and 100 characters")
            }
        }

        if (typeof(Number(editedProduct.price)) != 'number') {
            throw new Error("BAD_PARAMETERS - Price must be a number")
        } else {
            if (Number(editedProduct.price) < 0) {
                throw new Error("BAD_PARAMETERS - Price must be superior to 0")
            }
        }

        editedProduct.name = product.name;
        editedProduct.description = product.description;
        editedProduct.price = product.price;
        return products;
    }
}
