const express = require("express");
const router = express.Router();

const products = require("./product.route");
const carts = require("./cart.route");

router.get("/", function (req, res) {
    res.send(`<div style='text-align: center; margin-top: 20%; font-size: 2em; font-family: sans-serif;'>
        <h1>Welcome to the main server API</h1>
        <p>To see a list of products please click <a href="http://localhost:8080/api/products">/products</a></p>
        <p>To see a list of carts please click <a href="http://localhost:8080/api/carts">/carts</a></p>
        </div>`);
});

router.use("/api/products", products);
router.use("/api/carts", carts);

module.exports = router;