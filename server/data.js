const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThumbnailSchema = new Schema({
    id: Number,
    thumbnail: String,
});

export default mongoose.model("Thumbnails", ThumbnailSchema);