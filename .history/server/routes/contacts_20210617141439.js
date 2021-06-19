let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to book model
let Contacts = require('../models/contacts');

let contactsController = require('../controllers/contacts');

/* GET Route for Contact list-- READ Operation*/

router.get('/', contactsController.displayContactList);

/* GET Route for displaying Add Page- CREATE Operation*/
router.get('/add', contactController.displayAddPage);

/* POST Route for processing Add Page- CREATE Operation*/
router.post('/add',contactController.processAddPage);

/* GET Route for displaying Edit Page- UPDATE Operation*/
router.get('/edit/:id', contactController.displayEditPage);

/* POST Route for processing Edit Page- UPDATE Operation*/
router.post('/edit/:id', contactController.processEditPage);

/* GET Route for perform Deletion- DELETE Operation*/
router.get('/delete/:id', contactController.performPage);

module.exports = router;