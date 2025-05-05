const CartManager = require("../managers/cart.manager");
const path = require("path");

const CARTS_FILE = path.join(__dirname, "../db/carts.json");
console.log(`carts file in use: ${CARTS_FILE}`);

cm = new CartManager(CARTS_FILE);

const getCartService = async () => {
    return await cm.getCarts();
};

module.exports = {
    getCartService, // addCartService,
}