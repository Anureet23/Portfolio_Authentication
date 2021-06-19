let express =  require('express');
import * as DBConfig from '../config/db';


let Contacts = require('../models/contacts');

module.exports.UserDisplayName = (req,res,next)=>{
    if(!req.user)
    {
    res.render('auth/login',
    {
        title: "Login",
        messages: req.flash('loginMessage'),
        displayName: req.user ? req.user.displayName: ''
    })
    }
    else{
        return res.redirect('/');
    }
}