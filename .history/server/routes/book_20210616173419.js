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
              
            res.render('book/list',{title:'Books', BookList : bookList});
        }
    });
});


/* GET Route for displaying Add Page- CREATE Operation*/
router.get('/add', (req, res, next) => {
    res.render('book/add',{title:'Add Book'});
});

/* POST Route for processing Add Page- CREATE Operation*/
router.post('/add', (req, res, next) => {
   let newBook = Book({
          "name" : req.body.name,
          "author":req.body.author,
          "published": req.body.published,
          "description" : req.body.description,
          "price": req.body.price
   }); 

   Book.create(newBook,())

});
/* GET Route for displaying Edit Page- UPDATE Operation*/
router.get('/edit/:id', (req, res, next) => {

});
/* POST Route for processing Edit Page- UPDATE Operation*/
router.post('/edit/:id', (req, res, next) => {

});
/* GET Route for perform Deletion- DELETE Operation*/
router.get('/delete/:id', (req, res, next) => {

});

module.exports = router;