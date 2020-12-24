var mongoose = require ('mongoose');

   var contactus = new  mongoose.Schema({
    name: String,
    email: String,
    msg: String
});


mongoose.model("contact", contactus);
