var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Web Data Mangement, Project 1 website' });

});
module.exports = router;
module.exports = router;
