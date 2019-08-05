const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 3001;

const app = express();
app.use(cors());

const url = "mongodb+srv://Admin:test123@cluster0-3bglg.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error connecting to database"));
db.once("open", () => console.log("database connected successfully"));

app.listen(PORT, () => console.log("server listening on", PORT));