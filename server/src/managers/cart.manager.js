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
}

module.exports = CartManager;