const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");

const router = express.Router();

const Thumbnail = require("./models/thumbnail.js");
const Details = require("./models/details.js");

// gets all the data from the db
router.get("/", (req, res) => {
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
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
    });
    thumbnail.image = fs.readFileSync(req.body.imgPath).toString("base64");
    thumbnail.save()
        .then(product => {
            res.status(200).json({success: true, product: product});
        })
        .catch(err => {
            res.json({ success: false, error: err });
        });
});

router.delete("/clearAll", (req, res) => {
    Thumbnail.deleteMany({})
        .then(result => {
            res.json({ success: true, removedItems: result });
        })
        .catch(err => {
            res.error(err)
        })
});

// gets all the data from the db
router.get("/details/:id", (req, res) => {
    Details.findById(req.params.id).exec()
        .then(result => {
            res.json({ success: true, details: result })
        })
        .catch(err => {
            res.json({success: false, error: err });
        })
});

//adds new data to the db
router.post("/addDetails", (req, res) => {
    let details = new Details(req.body);
    details.save()
        .then(result => {
            res.status(200).json({success: true, details: result});
        })
        .catch(err => {
            res.json({ success: false, error: err });
        });
});

module.exports = router;