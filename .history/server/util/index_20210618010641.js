let express =  require('express');
import * as DBConfig from '../config/db';


let Contacts = require('../models/contacts');

module.exports.UserDisplayName = (req,res,next)=>{
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