var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('admin/login', {layout: false});
});
router.post('/', function(req, res, next){
	var name = req.param("name");
	var pwd = req.param("pwd");
	res.redirect('./admin');
});

module.exports = router;
