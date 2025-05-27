const {
    getCartService, getCartServiceByID, addCartService, addToCartByProductIdService,
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

const getCartControllerById = async (req, res) => {
    try {
        const cart = await getCartServiceByID(req.params.cid);
        if (!cart) {
            return res.status(404).json({message: "No carts found"});
        }
        res.status(200).json({status: "success", payload: cart});
    } catch (error) {
        res.status(500).json({status: "error", message: error.message});
    }
};

const addCartController = async (req, res) => {
    try {
        await addCartService(req.body);
        res.status(201).json({status: "success", message: "Cart added."});
    } catch (error) {
        res.status(500).json({status: "error", message: error.message});
    }
};

const addToCartByProductId = async (req, res) => {
    try {
        const cart = await addToCartByProductIdService(req.params.cid, req.params.pid);
        if (!cart) {
            return res.status(404).json({message: "No carts found"});
        }
        res.status(200).json({status: "success", payload: cart});
    } catch (error) {
        res.status(500).json({status: "error", message: error.message});
    }
};

module.exports = {
    getCartController,
    getCartControllerById,
    addCartController,
    addToCartByProductId,
}