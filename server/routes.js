const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const Thumbnail = require("./models/thumbnail.js");

// gets all the data from the db
router.get("/get", (req, res) => {
    Thumbnail.find()
        .then(products => {
            res.json({ success: true, thumbnails: products })
        })
        .catch(err => {
            res.json({success: false, error: err });
        })
});

//adds new data to the db
router.post("/add", (req, res) => {
    let thumbnail = new Thumbnail({
        ...req.body,
        id: new mongoose.Types.ObjectId()
    });
    thumbnail.save()
        .then(product => {
            res.status(200).json({success: true, product: product});
        })
        .catch(err => {
            res.json({ success: false, error: err });
        });
});

module.exports = router;