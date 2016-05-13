var express = require('express');
var router = express.Router();

function getProductList__(){
	var ptList = 
		[
		 {
			 "category":"Body Bag",
			 "items":["body bag17011","body bag-17014", "body bag-17015"]
		},
		{
			"category":"Extrication Device",
			"items":["extrication device"]
		},
		{
			"category":"Fanny Bag",
			"items":["fanny bag-13012","fanny bag-13013","fanny bag-13022"]
		},
		{
			"category":"First Aid Bag",
			"items":["first aid bag-14029","first aid bag-19011","first aid bag-19012"]
		},
		{
			"category":"oxygen bag",
			"items":["oxygen bag-12012A","Oxygen bag-12013","oxygen bag-12015"]
		}];
	return ptList;
};
router.getProductList = getProductList__;

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("req: ");
	console.log(req.query);
	var qrys = req.query;
	res.render('product', { layout: 'layout' , ptList: getProductList__()});
});


module.exports = router;
