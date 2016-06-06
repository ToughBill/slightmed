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
		viewName = "ptCategory";
		paramObj = getPtCategory();
	}
	else if(tag == "3"){
		viewName = "addProduct";
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
function getPtCategory(){
	var ptCate = 
		[
		 {
			 "id":1,
			 "category":"Body Bag"
		},
		{
			"category":"Extrication Device",
			"id":2
		},
		{
			"category":"Fanny Bag",
			"id":3
		},
		{
			"category":"First Aid Bag",
			"id":4
		},
		{
			"category":"oxygen bag",
			"id":5
		}];
	return {ptCate: ptCate};
}

module.exports = router;
