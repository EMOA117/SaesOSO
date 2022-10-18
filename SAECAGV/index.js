const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/views"));

app.use(express.urlencoded({ extended: true }));

//para poder trabajar con las cookies
app.use(cookieParser());

// app.get("/", function (req, res) {
//     res.render("index");
// });

app.get("/error", function (req, res) {
    res.render("404");
});
//app.get("/miembros", function (req, res) {
//    res.render("miembros");
//});
//app.get("/avisodeprivacidad", function (req, res) {
//    res.render("avisoPrivacidad");
//});
app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), function () {
    console.log(
        "Server",
        process.pid,
        "listening on port",
        app.get("port"),
        "or 5000"
    );
});
//estoy en VS code
app.use(
    "/",
    require("./modules/Usuario/routes"),
    require("./modules/Admin/routes"),
    require("./modules/Alumno/routes"),
    require("./modules/Auth/routes"),
    require("./modules/Calificacion/routes"),
    require("./modules/Grupo/routes"),
    require("./modules/Materia/routes"),
    require("./modules/Tarea/routes"),
    require("./modules/ApiAndroid/controller")
);

app.get("*", (req, res) => {
    res.render("404");
});
