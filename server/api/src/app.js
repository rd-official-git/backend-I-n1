const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");

app.engine("hbs", handlebars.engine({
        extname: ".hbs",
        defaultLayout: "main",
    partialsDir: path.join(__dirname, "views", "partials")
    })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


module.exports = app;