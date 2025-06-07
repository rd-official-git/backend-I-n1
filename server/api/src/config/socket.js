const server = require("../routes/index.js")

const {Server} = require("socket.io");

const io = new Server(server, {
    cors: {
        origin: false,
    }
})

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("disconnect", (data) => {
        console.log("-------->", data)
        console.log(`User disconnected: ${socket.id}`);
    })
})

// module.exports = io;
