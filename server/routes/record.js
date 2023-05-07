const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

//const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/record").get(async function (req, res) {
    let db_connect = dbo.getDb("csgo");
    try {
        let records = await db_connect
            .collection("items")
            .find({})
            .toArray();
        res.json(records);
    } catch (e) {
        console.log("An error occurred pulling the records. " + e);
    }
});

recordRoutes.route("/record/:id").get(function (req, res) {
    let db_connect = dbo.getDb("csgo");
    let myquery = { _id: req.params.id };
    db_connect
        .collection("items")
        .findOne(myquery, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
});

module.exports = recordRoutes;