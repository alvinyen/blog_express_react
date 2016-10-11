var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: 'Express' , age : 18 , title:'Express-React-Views Practice'} );
});

module.exports = router;
