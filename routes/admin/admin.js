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
	var tag = req.param("info", "-1");
	var viewName = "", paramObj = {};
	if(tag == "1"){
		viewName = "compInfo";
		paramObj = getCompInfo();
	}
	else if(tag == "2"){
		viewName = "ptMngt";
	}
	if(viewName == ""){
		res.write("<h4>wrong parameter!</h4>");
		res.end();
	}
	var str = fs.readFileSync(__dirname + "/../../views/admin/" + viewName + '.ejs', 'utf8');
	var ret = ejs.render(str, paramObj);
	res.write(ret);
	res.end();
	//res.render('admin/admin', {layout: false});
});

function getCompInfo(){
	return {info:"asdfjawefwflkwhfewe"};
}


module.exports = router;
