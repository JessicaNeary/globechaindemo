const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThumbnailSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    url: String,
    price: Number,
});

module.exports = mongoose.model("Thumbnail", ThumbnailSchema);