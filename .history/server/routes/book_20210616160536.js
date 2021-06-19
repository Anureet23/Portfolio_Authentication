let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to book model
let Book = require('../../models/book');

/* GET Route for Book list*/

router.get('/',(req,res,next)=>{
    Book.find((err,bookList)=>{
        if(err)
        {
            return console.error(err);
        }
        else{
            //console.log(BookList);
              
            res.render('book',{title:'Book List', BookList : bookList})
        }
    });
});

module.exports = router;