"use strict";
var mongoose = require('mongoose');
var contactusModel = mongoose.model("contact");

var saveContactData = function (context, cb) {

    var contact = new contactusModel();
    contact.email = context.body.email;
    contact.name = context.body.name;
    contact.msg = context.body.msg;
    contact.save((err, docs) => {
        return cb({
            status: "success",
        });
    });
}


exports.saveContactData = saveContactData;

