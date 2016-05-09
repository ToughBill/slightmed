var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("req: ");
	console.log(res.Url);
	res.render('product', { layout: 'layout' });
});

module.exports = router;
