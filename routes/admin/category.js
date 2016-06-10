var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	//res.render('admin/addProduct', {layout: admin});
});
router.post('/', function(req, res, next){
	var ac = req.param("ac");
	var data = eval('('+req.param("data")+')');;
	console.log(data);
	res.write(JSON.stringify({ac:ac,ret:1}));
	res.end();
});

module.exports = router;
