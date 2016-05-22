var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
	//TODO: check whether the user has login the system
	res.render('admin/admin', {layout: false});
});
router.post('/', function(req, res, next){
	var tag = req.param("info", "");
	var str = fs.readFileSync(tag + '.ejs', 'utf8');
	var ret = ejs.render(str, {info:"asdfjawefwflkwhfewe"});
	res.write(ret);
	res.end();
	//res.render('admin/admin', {layout: false});
});

module.exports = router;
