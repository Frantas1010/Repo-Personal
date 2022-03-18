const express = require("express");
const app = express();
const port = 3000;
const ruta = __dirname + "/index.html";
const bodyparser = require("body-parser");
const ejs = require("ejs");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.set("view engine", "ejs");
app.set("views", "./vistas");

app.get("/", (req, res) => {
    res.sendFile(ruta);
});

app.post("/tunombre", (req, res) => {
    res.render("vista1", {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha: req.body.fecha,
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
