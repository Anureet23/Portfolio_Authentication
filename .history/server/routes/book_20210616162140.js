let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to book model
let Book = require('../models/book');

/* GET Route for Book list*/

router.get('/',(req,res,next)=>{
    Book.find((err,bookList)=>{
        if(err)
        {
            return console.error(err);
        }
        else{
            //console.log(BookList);
              
            res.render('book',{title:'Books', BookList : bookList})
        }
    });
});


/* GET Route for displaying Add Page- CREATE Operation*/


/* POST Route for displaying Add Page- CREATE Operation*/

/* GET Route for displaying Edit Page- CREATE Operation*/

/* POST Route for displaying Edit Page- CREATE Operation*/
module.exports = router;