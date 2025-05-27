const ProductManager = require("../managers/product.manager");
const path = require("path");

const PRODUCTS_FILE = path.join(__dirname, "../db/products.json");
console.log(`products file in use: ${PRODUCTS_FILE}`);

pm = new ProductManager(PRODUCTS_FILE);

const getProductService = async () => {
    return await pm.getProducts();
};

const getProductServiceByID = async (pid) => {
    return await pm.getProductById(pid);
};

const addProductService = async (data) => {
    return await pm.addProducts(data);
};

const updateProductServiceById = async (pid, data) => {
    return await pm.updateProductById(pid, data);
};

const deleteProductServiceById = async (pid) => {
    return await pm.deleteProductById(pid);
};

module.exports = {
    getProductService,
    getProductServiceByID,
    addProductService,
    updateProductServiceById,
    deleteProductServiceById,
}