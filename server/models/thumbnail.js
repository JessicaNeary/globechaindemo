const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThumbnailSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    image: String,
    price: Number,
});

module.exports = mongoose.model("Thumbnail", ThumbnailSchema);