const {
    getCartService, // addCartService,
} = require("../services/cart.service");

const getCartController = async (req, res) => {
    try {
        const carts = await getCartService();
        if (!carts) {
            return res.status(404).json({message: "No carts found"});
        }
        res.status(200).json({status: "success", payload: carts});
    } catch (error) {
        res.status(500).json({status: "error", message: error.message});
    }
};

module.exports = {
    getCartController, // addCartController,
}