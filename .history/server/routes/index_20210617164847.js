/* FileName : index.js */
/* StudentName :Anureet Kaur */
/* Student Id :301174444 */
/* Date : 4/06/2021 */
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact us page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying Login Page*/
router.get('/login', contactsController.displayAddPage);

/* POST Route for processing the Login Page- CREATE Operation*/
router.post('/add',contactsController.processAddPage);

/* GET Route for displaying Add Page- CREATE Operation*/
router.get('/add', contactsController.displayAddPage);

/* POST Route for processing Add Page- CREATE Operation*/
router.post('/add',contactsController.processAddPage);

GET Route for perform Deletion- DELETE Operation*/
router.get('/delete/:id', contactsController.performPage);

module.exports = router;
