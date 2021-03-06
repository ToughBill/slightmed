var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var fs = require('fs');
var categoryObject = require('./../bo/categoryObject');

/* GET users listing. */
router.get('/', function(req, res, next) {
	//TODO: check whether the user has login the system
	res.render('admin/admin', {layout: false});
});
router.post('/', function(req, res, next){
	var module = req.param("m", "-1");
	if(module == "1"){
		handleCompanyInfoManagement(req, res);
	}
	else if(module == "2"){
		handleProductManagement(req, res);
	}
	else if(module == "-1"){
		res.write("<h4>wrong parameter!</h4>");
		res.end();
	}
	
	//res.render('admin/admin', {layout: false});
});

function handleCompanyInfoManagement(req, res){
	var viewName = "compInfo", paramObj = {info:"asdfjawefwflkwhfewe"};
	var str = fs.readFileSync(__dirname + "/../../views/admin/" + viewName + '.ejs', 'utf8');
	var ret = ejs.render(str, paramObj);
	res.write(ret);
	res.end();
}

function handleProductManagement(req, res){
	var viewName = "", paramObj = {};
	var module = req.param("m", "-1");
	var category = req.param("c", "-1");
	if(category == "1"){
		viewName = "ptCategory";
		paramObj = getPtCategory();
	}
	else if(category == "2"){
		viewName = "addProduct";
	}
	var str = fs.readFileSync(__dirname + "/../../views/admin/" + viewName + '.ejs', 'utf8');
	var ret = ejs.render(str, paramObj);
	res.write(JSON.stringify({ac:buildActionStr(module, category) ,temp:ret, data:paramObj}));
	res.end();
}
function getPtCategory(){
	/*var ptCate = 
		[
		 {
			 "id":1,
			 "category":"Body Bag",
			 "code":"BBG"
		},
		{
			"category":"Extrication Device",
			"id":2,
			"code":"EDE"
		},
		{
			"category":"Fanny Bag",
			"id":3,
			"code":"FBG"
		},
		{
			"category":"First Aid Bag",
			"id":4,
			"code":"FAB"
		},
		{
			"category":"oxygen bag",
			"id":5,
			"code":"OBB"
		}];*/
	var ptCate = categoryObject.getAllCategories();
	return {ptCate: ptCate};
}
function buildActionStr(module, category){
	return "m" + module + ",c" + category;
}
module.exports = router;
