const express = require("express");
const router = express.Router();

const app = require("../app.js")

const products = require("./product.route");
const carts = require("./cart.route");

// router.get("/", function (req, res) {
//     res.send(`<div style='text-align: center; margin-top: 20%; font-size: 2em; font-family: sans-serif;'>
//         <h1>Welcome to the main server API</h1>
//         <p>To see a list of products please click <a href="http://localhost:8080/api/products">/products</a></p>
//         <p>To see a list of carts please click <a href="http://localhost:8080/api/carts">/carts</a></p>
//         </div>`);
// });

router.get("/", (req, res) => {
    return res.render("pages/home", {});
});

router.use("/api/products", products);
router.use("/api/carts", carts);

router.get("/waterlilies", (req, res) => {
    return res.render("pages/waterlilies");
});

router.get("/realtimeproducts", (req, res) => {
    return res.render("pages/realTimeProducts.hbs",);
});

app.use(router);

const PORT = 8080

try {
    app.listen(PORT);
    console.log(`Backend server listening on port http://localhost:${PORT}`);
} catch (error) {
    console.log(`Server encountered an error: ${error.message}`);
}