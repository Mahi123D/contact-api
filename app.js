const express = require('express');
const mongoose = require('mongoose')
var bodyparser = require('body-parser');
const app = express();

var cors = require('cors');
app.use(cors());
app.use(bodyparser.json());
var connection = require('./model/connection');

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("server started on " + PORT))

app.use('/contact', require("./service/api/contact"));
// app.use('/order', require("./server/api/order"));
