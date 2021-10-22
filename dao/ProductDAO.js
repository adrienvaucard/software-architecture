let PRODUCT_COUNT = 0

module.exports = {
    list: () => {
        let foundProducts = FAKE_DB.products
        return foundProducts;
    },

    // create : (user) => {
    //     user._id = -1;
    //     FAKE_DB.users.push(user);
    // }
}
