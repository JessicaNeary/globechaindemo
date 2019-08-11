const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetailsSchema = new Schema({
    _id: Schema.Types.ObjectId,
    description: String,
    attributes: Array,
})

module.exports = mongoose.model("Details", DetailsSchema);