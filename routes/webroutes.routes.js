const router = require('express').Router();

// GET http://localhost:3000/

router.get('/', function(req, res){
    res.render('home.pug');
});

// GET http://localhost:3000/about

router.get('/about', function(req, res){
    res.render('about.pug');
});

// GET http://localhost:3000/location

router.get('/location', function(req, res){
    res.render('location.pug');
});

// GET http://localhost:3000/mission

router.get('/mission', function(req, res){
    res.render('mission.pug');
});

// GET http://localhost:3000/contact

router.get('/contact', function(req, res){
    res.render('contact.pug');
});

module.exports = router;