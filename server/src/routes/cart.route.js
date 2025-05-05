const express = require("express");
const router = express.Router();
const moment = require("moment");

const {
    getCartController
} = require("../controllers/cart.controller");

router.use(function (req, res, next) {
    console.log(`/api/carts${req.url} @ ${moment()}`);
    next();
});

router.get("/", getCartController);

module.exports = router;