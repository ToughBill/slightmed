var express = require('express');
var router = express.Router();
var dbConn = require('./../db');
var categoryObject = require('./../bo/categoryObject');

/* GET users listing. */
router.get('/', function(req, res, next) {
	//res.render('admin/addProduct', {layout: admin});
});
router.post('/', function(req, res, next){
	var ac = req.param("ac");
	var data = eval('('+req.param("data")+')');;
	console.log(data);
	categoryObject.save(data);
	/*var ptSchema = new dbConn.Schema({
		id: Number,
		category: String,
		code: String
	}, {collection: "Category"});
	var ptModel = dbConn.model('Category', ptSchema);
	data.forEach(function(ele, i){
		var cateEntity = new ptModel(ele);
		cateEntity.save(function(err){
			if(err){
				console.log(err);
			}
		});
	});*/
	
	
	res.write(JSON.stringify({ac:ac,ret:1}));
	res.end();
});

module.exports = router;
