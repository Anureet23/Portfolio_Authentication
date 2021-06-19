let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to book model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact');

/* GET Route for Contact list-- READ Operation*/

router.get('/', contactController.displayContactList);

/* GET Route for displaying Add Page- CREATE Operation*/
router.get('/add', contactController.displayAddPage);

/* POST Route for processing Add Page- CREATE Operation*/
router.post('/add',contactController.processAddPage);

/* GET Route for displaying Edit Page- UPDATE Operation*/
router.get('/edit/:id',bookController.displayEditPage);

/* POST Route for processing Edit Page- UPDATE Operation*/
router.post('/edit/:id', bookController.processEditPage);

/* GET Route for perform Deletion- DELETE Operation*/
router.get('/delete/:id',bookController.performPage);

module.exports = router;