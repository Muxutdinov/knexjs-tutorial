const express = require("express");
const app = express();
const router = require("./routes/index");

app.use(express.json());
app.use(router);

app.listen(4000, () => console.log("Server run on port: 4000"));
