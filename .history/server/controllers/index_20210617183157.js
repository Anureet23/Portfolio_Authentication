let express =  require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//create the User Model Instance
let userModel = require('../models/user');
let User = userModel.User; // Alias


module.exports.displayHomePage = (req, res, next) => {

    res.render('index',{title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {

    res.render('about',{title: 'About'});
}

module.exports.displayProjectsPage = (req, res, next) => {

    res.render('projects',{title: 'Projects'});
}

module.exports.displayServicesPage = (req, res, next) => {

    res.render('services',{title: 'Services'});
}

module.exports.displayContactPage = (req, res, next) => {

    res.render('contact',{title: 'Contact'});
}

module.exports.displayLoginPage = (req, res, next) =>{
    //check if  the user is already logged in
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

module.exports.processLoginPage = (req, res, next) =>{
    passport.authenticate('local',
    (err,user,info) => {
        //server error
        if(err)
        {
            return next(err);
        }
        //is there a user login error
        if(!user)
        {
            req.flash('loginMessage','Authentication Error');
            res.redirect('/login');
        }
        req.login(user,(err)=>
        {
                //server error
                if(err)
                {
                    return next(err);
                }    
                return res.redirect('/contacts-list');
        });
        })(req,res,next);
    }
    
    module.exports.displayRegisterPage = ( req, res, next) => {
        //check if if the user is not already logged in
        if(!req.user)
        {
            res.render('auth/register',
            {
                title: "Register",
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName: ''
            });
        }
        else
        {
            return res.redirect('/');
        }
    }

    module.exports.processingRegisterPage = (req,res,next) => {
        //instantiate a user object
        let newUser = new User({
        username: req.body.username,
        //password:req.body.password
        email: req.body.email,
        dosplayName: req.body.displayName
        });

        User.register(newUser, req.body.password)
    }