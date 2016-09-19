var dbConn = require('./../db');
var categoryModule = require('./categorySchema');

var CategoryObject = {};
CategoryObject.save = function(data){
	//var ptModel = getCategoryModel();
	data.forEach(function(ele, i){
		categoryModule.findOne({id:ele.id},function(err, node){
			if(!err){
				if(node == null){
					var cateEntity = new categoryModule(ele);
					cateEntity.save(function(err){
						if(err){
							console.log(err);
						}
					});
				}
				else{
					node.category = ele.category;
					node.code = ele.code;
					node.save(function(err){
						if(err){
							console.log("update object " + ele.category + "fail! " + err);
						}
					});
				}
			}
			else{
				console.log(err);
			}
		});
		/*var cateEntity = new ptModel(ele);
		cateEntity.save(function(err){
			if(err){
				console.log(err);
			}
		});*/
	});
};

CategoryObject.getAllCategories = function(){
	var ret = [];
	//var ptModel = getCategoryModel();
	categoryModule.find({},function(err, cates){
		if(!err){
			ret = cates;
		}
	});
	
	return ret;
};

module.exports = CategoryObject;
