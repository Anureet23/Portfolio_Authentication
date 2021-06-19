let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Create a reference to the model

let Book = require('../models/book');

module.exports.display