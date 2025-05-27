const CartManager = require("../managers/cart.manager");
const path = require("path");

const CARTS_FILE = path.join(__dirname, "../db/carts.json");
console.log(`carts file in use: ${CARTS_FILE}`);

cm = new CartManager(CARTS_FILE);

const getCartService = async () => {
    return await cm.getCarts();
};

const getCartServiceByID = async (cid) => {
    return await cm.getCartById(cid);
};

const addCartService = async (data) => {
    return await cm.addCarts(data);
};

const addToCartByProductIdService = async (cid, pid) => {
    return await cm.addToCartByProductId(cid, pid);
};

module.exports = {
    getCartService,
    getCartServiceByID,
    addCartService,
    addToCartByProductIdService,
}