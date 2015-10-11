var express = require('express');
var session = require('express-session');
var router = express.Router();

router.get('/', function(req, res, next) {
  var sess = req.session;

});

module.exports = router;
