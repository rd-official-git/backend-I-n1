const {
    getProductService, getProductServiceByID, addProductService, updateProductServiceById, deleteProductServiceById,
} = require("../services/product.service");

const getProductController = async (req, res) => {
    try {
        const products = await getProductService();
        if (!products) {
            return res.status(404).json({message: "No products found"});
        }
        res.status(200).json({status: "success", payload: products});
    } catch (error) {
        res.status(500).json({status: "error", message: error.message});
    }
};

const getProductControllerById = async (req, res) => {
    try {
        const product = await getProductServiceByID(req.params.pid);
        if (!product) {
            return res.status(404).json({message: "No products found"});
        }
        res.status(200).json({status: "success", payload: product});
    } catch (error) {
        res.status(500).json({status: "error", message: error.message});
    }
};

const addProductController = async (req, res) => {
    try {
        await addProductService(req.body);
        res.status(201).json({status: "success", message: "Products added."});
    } catch (error) {
        res.status(500).json({status: "error", message: error.message});
    }
};

const updateProductControllerById = async (req, res) => {
    try {
        let product = await updateProductServiceById(req.params.pid, req.body);
        if (!product) {
            return res.status(404).json({message: "No products found"});
        }
        res.status(200).json({status: "success", payload: product});
    } catch (error) {
        res.status(500).json({status: "error", message: error.message});
    }
}

const deleteProductControllerById = async (req, res) => {
    try {
        let product = await deleteProductServiceById(req.params.pid);
        if (!product) {
            return res.status(404).json({message: "No products found"});
        }
        res.status(200).json({status: "success", message: "Product deleted successfully."});
    } catch (error) {
        res.status(500).json({status: "error", message: error.message});
    }
}

module.exports = {
    getProductController,
    getProductControllerById,
    addProductController,
    updateProductControllerById,
    deleteProductControllerById,
}