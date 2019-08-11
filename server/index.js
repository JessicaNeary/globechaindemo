const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require("./routes.js");
const PORT = 3002;

const app = express();
app.use(cors());
app.use(bodyParser.json())

const url = "mongodb+srv://Admin:test123@cluster0-3bglg.mongodb.net/test?retryWrites=true&w=majority"
const db = mongoose.connect(url, { useNewUrlParser: true });

app.use("/products", routes);

app.listen(PORT, () => console.log("server listening on", PORT));