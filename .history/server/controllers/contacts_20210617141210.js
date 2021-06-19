let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Create a reference to the model

let Contacts = require('../models/contacts');

module.exports.displayContactList = (req,res,next)=>{
    Contacts.find((err,contactsList)=>{
        if(err)
        {
            return console.error(err);
        }
        else{
            //console.log(BookList);
              
            res.render('contacts/list',{title:'Contacts', ContactsList : contactsList});
        }
    });
}

module.exports.displayAddPage = (req,res,next) =>{
    res.render('contacts/add',{title: 'Add Contact'})
}

module.exports.processAddPage =  (req, res, next) => {
    let newContact = Contacts({
           "name" : req.body.name,
           "author": req.body.author,
           "published": req.body.published,
           "description" : req.body.description,
           "price": req.body.price
    }); 
    Contacts.create(newContacts,(err,BoCok)=> {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the book list
            res.redirect('/contacts-list');
        }
       });
    }

    module.exports.displayEditPage =  (req, res, next) => {
        let id = req.params.id;
 
        Contact.findById(id,(err,contactToEdit) => {
 
         if(err){
             console.log(err);
             res.end(err);
         }
         else{
 
             //show the edit view
             res.render('contact/edit', {title: 'Edit Contact',contact:contactToEdit})
         }
 
        });
 }

 module.exports.processEditPage = (req, res, next) => {

    let id = req.params.id;
    let updatedContact = Contact({
        "_id":id,
        "name" : req.body.name,
        "author":req.body.author,
        "published": req.body.published,
        "description" : req.body.description,
        "price": req.body.price
    });
    
    Contact.updateOne({_id: id},updatedContact,(err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
           //refresh the book list
           res.redirect('/contact-list');
        }
    });
    
    }

    module.exports.performPage =  (req, res, next) => {

        let id = req.params.id;
        Contact.remove({_id: id},(err) =>{
            if(err){
                console.log(err);
                res.end(err);
            }
            else{
               //refresh the book list
               res.redirect('/contact-list');
            }
        });
    }