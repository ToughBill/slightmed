var express = require('express');
var router = express.Router();
var product = require('./product');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { layout: 'layout', ptList: product.getProductList()});
});

module.exports = router;
