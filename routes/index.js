var express = require('express');
var router = express.Router();
var product = require('./product');

/* GET home page. */
router.get('/', function(req, res, next) {
	var ps=product.getProductList();
	console.log("ps:");
	console.log(ps);
	res.render('index', { ptList: ps, layout: 'master'});
});

module.exports = router;
