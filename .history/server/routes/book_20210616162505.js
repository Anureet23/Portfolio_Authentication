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
router.get()

/* POST Route for processing Add Page- CREATE Operation*/

/* GET Route for displaying Edit Page- UPDATE Operation*/

/* POST Route for processing Edit Page- UPDATE Operation*/

/* GET Route for perform Deletion- DELETE Operation*/


module.exports = router;