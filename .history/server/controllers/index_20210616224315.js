let express =  require('express');
let router = express.Router();


module.exports.displayHomePage = (req, res, next) => {

    res.render('index',{title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {

    res.render('ab',{title: 'About'});
}

module.exports.displayProductsPage = (req, res, next) => {

    res.render('index',{title: 'Products'});
}

module.exports.displayServicesPage = (req, res, next) => {

    res.render('index',{title: 'Services'});
}

module.exports.displayContactPage = (req, res, next) => {

    res.render('index',{title: 'Contact'});
}
