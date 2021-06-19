let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Create a reference to the model

let Book = require('../models/book');

module.exports.displayContactList = (req,res,next)=>{
    Book.find((err,bookList)=>{
        if(err)
        {
            return console.error(err);
        }
        else{
            //console.log(BookList);
              
            res.render('book/list',{title:'Books', BookList : bookList});
        }
    });
}

module.exports.displayAddPage = (req,res,next) =>{
    res.render('book/add',{title: 'Add Book'})
}

module.exports.processAddPage =  (req, res, next) => {
    let newBook = Book({
           "name" : req.body.name,
           "author":req.body.author,
           "published": req.body.published,
           "description" : req.body.description,
           "price": req.body.price
    }); 