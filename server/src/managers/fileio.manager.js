const fs = require("fs").promises;


class FileOperation {
    constructor(FILE) {
        this.FILE = FILE;
    }

    fread = async () => {
        try {
            const data = await fs.readFile(this.FILE, "utf-8");
            return JSON.parse(data);
        } catch (error) {
            console.error(`File read operation error: ${error.message}`)
            return []
        }
    };

    fwrite = async (data) => {
        try {
            await fs.writeFile(this.FILE, JSON.stringify(data, null, 2))
            console.log(`${this.FILE} file was written`);
        } catch (error) {
            console.error(`File write operation error: ${error.message}`)
        }
    };

}

module.exports = FileOperation;