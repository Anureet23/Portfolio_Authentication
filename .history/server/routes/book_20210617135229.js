let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to book model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact');

/* GET Route for Co list-- READ Operation*/

router.get('/', bookController.displayContactList);

/* GET Route for displaying Add Page- CREATE Operation*/
router.get('/add', bookController.displayAddPage);

/* POST Route for processing Add Page- CREATE Operation*/
router.post('/add',bookController.processAddPage);

/* GET Route for displaying Edit Page- UPDATE Operation*/
router.get('/edit/:id',bookController.displayEditPage);

/* POST Route for processing Edit Page- UPDATE Operation*/
router.post('/edit/:id', bookController.processEditPage);

/* GET Route for perform Deletion- DELETE Operation*/
router.get('/delete/:id',bookController.performPage);

module.exports = router;