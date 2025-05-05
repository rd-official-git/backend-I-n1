const express = require("express");
const app = express();

const router = require("./routes/index");
app.use(express.json());

const PORT = 8080

try {
    app.listen(PORT);
    console.log(`Backend server listening on port http://localhost/${PORT}`);
} catch (error) {
    console.log(`Server encountered an error: ${error.message}`);
}

app.use(router);