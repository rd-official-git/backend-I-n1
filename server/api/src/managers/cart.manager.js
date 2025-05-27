const FileOperation = require("./fileio.manager");


class CartManager {
    constructor(path) {
        this.path = path;
        this.op = new FileOperation(this.path);
    }

    getCarts = async () => {
        try {
            return await this.op.fread();
        } catch (error) {
            console.error(error);
        }
    };

    getCartById = async (cid) => {
        try {
            const current_carts = await this.op.fread()
            return current_carts.find((cart) => cart.id === parseInt(cid));
        } catch (error) {
            console.error(error);
        }
    };

    addCarts = async (request_body) => {
        try {
            let new_cart_entry = []

            const current_content = await this.op.fread();

            let current_file_length = current_content.length;

            const {products} = request_body;

            const newCart = {
                id: current_file_length + 1, products,
            };
            new_cart_entry.push(newCart);
            await this.op.fwrite(new_cart_entry);
        } catch (error) {
            console.error(error);
        }
    };

    addToCartByProductId = async (cid, pid) => {
        try {
            let updated_cart_entry = []

            const current_carts = await this.op.fread();

            let cart_to_update = current_carts.find((cart) => cart.id === parseInt(cid));

            if (!cart_to_update) {
                return cart_to_update;
            }

            let product_to_update = cart_to_update.products.find((products) => products.product_id === parseInt(pid))

            if (product_to_update) {

                const update_product_in_cart = {
                    product_id: parseInt(pid),
                    quantity: product_to_update.quantity + 1,
                }

                cart_to_update.products =
                    cart_to_update.products.filter((products) => products.product_id !== parseInt(pid))

                cart_to_update.products.push(update_product_in_cart);

                console.log(`Product exists, updated quantity`)
            } else {
                const add_new_product_to_cart = {
                    product_id: parseInt(pid),
                    quantity: 1,
                }
                cart_to_update.products.push(add_new_product_to_cart);
                console.log("Product doesn't exist, added entry")
            }

            updated_cart_entry.push(cart_to_update);
            await this.op.fwrite(updated_cart_entry);
            return updated_cart_entry;
        } catch (error) {
            console.error(error);
        }
    };

}

module.exports = CartManager;