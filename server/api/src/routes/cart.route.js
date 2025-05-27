const express = require("express");
const router = express.Router();
const moment = require("moment");

const {
    getCartController,
    getCartControllerById,
    addCartController,
    addToCartByProductId,
} = require("../controllers/cart.controller");

router.use(function (req, res, next) {
    console.log(`/api/carts${req.url} @ ${moment()}`);
    next();
});

router.get("/", getCartController);

router.get("/:cid", getCartControllerById);

router.post("/", addCartController);

router.post("/:cid/product/:pid", addToCartByProductId);

module.exports = router;