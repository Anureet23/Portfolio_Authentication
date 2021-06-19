let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Create a reference to the model

let Contact = require('../models/contact');

module.exports.displayContactList = (req,res,next)=>{
    Contact.find((err,contactList)=>{
        if(err)
        {
            return console.error(err);
        }
        else{
            //console.log(BookList);
              
            res.render('contact/list',{title:'Contacts', ContactList : contactList});
        }
    });
}

module.exports.displayAddPage = (req,res,next) =>{
    res.render('contact/add',{title: 'Add Contact'})
}

module.exports.processAddPage =  (req, res, next) => {
    let newContact = Contact({
           "name" : req.body.name,
           "author":req.body.author,
           "published": req.body.published,
           "description" : req.body.description,
           "price": req.body.price
    }); 
    Contact.create(newContact,(err,Book)=> {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the book list
            res.redirect('/book-list');
        }
       });
    }

    module.exports.displayEditPage =  (req, res, next) => {
        let id = req.params.id;
 
        Book.findById(id,(err,bookToEdit) => {
 
         if(err){
             console.log(err);
             res.end(err);
         }
         else{
 
             //show the edit view
             res.render('book/edit', {title: 'Edit Book',book:bookToEdit})
         }
 
        });
 }

 module.exports.processEditPage = (req, res, next) => {

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
    
    }

    module.exports.performPage =  (req, res, next) => {

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
    }