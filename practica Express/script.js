const express = require("express");
const app = express();
const port = 5500;

app.get("/my-handling-form-page", (req, res) => {
    res.send(req.params.name);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
