let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//Connect to book model
let Contacts = require('../models/contacts');

let contactsController = require('../controllers/contacts');

//helper function for guard purposes
function requireAuth(req, res, next) 
{
    //check if the user is logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
}

/* GET Route for Contact list-- READ Operation*/

router.get('/', contactsController.displayContactList);

/* GET Route for displaying Add Page- CREATE Operation*/
router.get('/add', ,contactsController.displayAddPage);

/* POST Route for processing Add Page- CREATE Operation*/
router.post('/add',contactsController.processAddPage);

/* GET Route for displaying Edit Page- UPDATE Operation*/
router.get('/edit/:id', contactsController.displayEditPage);

/* POST Route for processing Edit Page- UPDATE Operation*/
router.post('/edit/:id', contactsController.processEditPage);

/* GET Route for perform Deletion- DELETE Operation*/
router.get('/delete/:id', contactsController.performPage);

module.exports = router;