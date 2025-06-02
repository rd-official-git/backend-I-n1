const socket = io("http://localhost:8080");

socket.on("update", (realTimeProductList) => {
    const list = document.getElementById("product-list");
    list.innerHTML = "";
    realTimeProductList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = JSON.stringify(item);
        realTimeProductList.append(li);
    });
});