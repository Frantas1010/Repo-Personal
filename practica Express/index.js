const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyparser = require("body-parser");
const ruta = path.join(__filename, '../index.html');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.get("/page", (req, res) => {
    res.sendFile(ruta);
});

app.post("/page/tunombre", (req, res) => {
    res.send("hola " + req.body.user_name + " " + req.body.user_name2);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
