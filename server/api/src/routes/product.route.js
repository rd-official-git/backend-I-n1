const express = require("express");
const router = express.Router();
const moment = require("moment")

const {
    getProductController,
    getProductControllerById,
    addProductController,
    updateProductControllerById,
    deleteProductControllerById,
} = require("../controllers/product.controller");

router.use(function (req, res, next) {
    console.log(`/api/products${req.url} @ ${moment()}`);
    next();
});

router.get("/", getProductController);

router.get("/:pid", getProductControllerById);

router.post("/", addProductController);

router.put("/:pid", updateProductControllerById);

router.delete("/:pid", deleteProductControllerById);


module.exports = router;
