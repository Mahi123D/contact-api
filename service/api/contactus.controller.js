"use strict";

var lib = require("../../lib/index");

var saveContactData = function (req, res) {

    var context = {
        req: req,
        body: req.body 
    }
    console.log("context",context.body);

    lib.saveContactData(context, function (e, r){
        return res.json (e || r);
    });

}

exports.saveContactData = saveContactData;

