const FileOperation = require("./fileio.manager");


class ProductManager {
    constructor(path) {
        this.path = path;
        this.op = new FileOperation(this.path);
    }

    getProducts = async () => {
        try {
            return await this.op.fread();
        } catch (error) {
            console.error(error);
        }
    };

    getProductById = async (pid) => {
        try {
            const current_products = await this.op.fread()
            return current_products.find((product) => product.id === parseInt(pid));
        } catch (error) {
            console.error(error);
        }
    };

    addProducts = async (request_body) => {
        try {
            let new_product_entries = await this.op.fread();

            let current_file_length = new_product_entries.length;
            for (const item of request_body) {

                const {title, description, code, price, status, stock, category, thumbnails} = item;

                const newProduct = {
                    id: current_file_length + 1, title, description, code, price, status, stock, category, thumbnails
                };
                new_product_entries.push(newProduct);
                current_file_length += 1;
            }
            await this.op.fwrite(new_product_entries);
        } catch (error) {
            console.error(error);
        }
    };

    updateProductById = async (pid, request_body) => {
        try {
            const product_id = parseInt(pid);
            let current_products = await this.op.fread()
            const product_to_update = current_products.find((product) => product.id === product_id);
            if (!product_to_update) {
                return product_to_update;
            }

            let {
                title, description, code, price, status, stock, category, thumbnails
            } = request_body;

            let updated_product_entry = []

            const updatedProduct = {
                id: product_id, title, description, code, price, status, stock, category, thumbnails
            };
            updated_product_entry.push(updatedProduct);
            current_products = [...current_products.filter((product) => product.id !== product_id), ...updated_product_entry];
            await this.op.fwrite(current_products);

            return updatedProduct;

        } catch (error) {
            console.error(error);
        }
    };

    deleteProductById = async (pid) => {
        try {
            const product_id = parseInt(pid);
            let current_products = await this.op.fread()
            const product_to_delete = current_products.find((product) => product.id === product_id);
            if (!product_to_delete) {
                return product_to_delete;
            }

            current_products = current_products.filter((product) => product.id !== product_id);
            await this.op.fwrite(current_products);

            return product_to_delete;

        } catch (error) {
            console.error(error);
        }
    };

}

module.exports = ProductManager;