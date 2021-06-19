let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to book model
let Book = require('../models/book');

let bookController = require('../controllers/book');

/* GET Route for Book list-- READ Operation*/

router.get('/', bookController.displayContactList);

/* GET Route for displaying Add Page- CREATE Operation*/
router.get('/add', bookController.displayAddPage);

/* POST Route for processing Add Page- CREATE Operation*/
router.post('/add',bookController.processAddPage);

/* GET Route for displaying Edit Page- UPDATE Operation*/
router.get('/edit/:id',);
/* POST Route for processing Edit Page- UPDATE Operation*/
router.post('/edit/:id', (req, res, next) => {

let id = req.params.id;
let updatedBBook = Book({
    "_id":id,
    "name" : req.body.name,
    "author":req.body.author,
    "published": req.body.published,
    "description" : req.body.description,
    "price": req.body.price
});

Book.updateOne({_id: id},updatedBBook,(err) =>{
    if(err){
        console.log(err);
        res.end(err);
    }
    else{
       //refresh the book list
       res.redirect('/book-list');
    }
});

});
/* GET Route for perform Deletion- DELETE Operation*/
router.get('/delete/:id', (req, res, next) => {

    let id = req.params.id;
    Book.remove({_id: id},(err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
           //refresh the book list
           res.redirect('/book-list');
        }
    });
});

module.exports = router;