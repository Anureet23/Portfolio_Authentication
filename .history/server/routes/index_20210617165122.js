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

/* POST Route for processing the Login Page*/
router.post('/login',contactsController.processAddPage);

/* GET Route for displaying the Register Page*/
router.get('/register', contactsController.displayAddPage);

/* POST Route for processing the Register Page*/
router.post('/register',contactsController.processAddPage);

/*GET Route for perform User Logout*/
router.get('/logout', contactsController.performPage);

module.exports = router;
