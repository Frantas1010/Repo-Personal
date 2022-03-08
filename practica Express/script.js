const express = require("express");
const app = express();
const port = 5500;
const path = require("path");
const bodyparser = require("Body-parser");
const ruta = path.join(__filename, '../index.html');

app.get("/page", (req, res) => {
    res.sendFile(ruta);
});

app.post("/page/tunombre", (req, res) => {
    res.send();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
