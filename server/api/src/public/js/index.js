console.log(`We are in our client side script`)
const socket = io("http://http://localhost:8080/");
console.log(`socket: ${socket}`);

socket.on("update", (realTimeProductList) => {
    console.log(`update event received for socket.id ${socket.id} and data ${realTimeProductList}`);
    const list = document.getElementById("product-list");
    list.innerHTML = "";
    realTimeProductList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = JSON.stringify(item);
        realTimeProductList.append(li);
    });
});