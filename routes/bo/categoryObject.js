var dbConn = require('./../db');
var CATEGORY_TABLE_NAME = "Category";

var CategoryObject = {};
CategoryObject.save = function(data){
	var ptModel = getCategoryModel();
	data.forEach(function(ele, i){
		ptModel.findOne({id:ele.id},function(err, node){
			if(!err){
				if(node == null){
					var cateEntity = new ptModel(ele);
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
	var ptModel = getCategoryModel();
	ptModel.find({},function(err, cates){
		if(!err){
			ret = cates;
		}
	});
	
	return ret;
};

function getCategorySchema(){
	var ptSchema = new dbConn.Schema({
		id: Number,
		category: String,
		code: String
	}, {collection: CATEGORY_TABLE_NAME});
	
	return ptSchema;
}

function getCategoryModel(){
	var ptSchema = getCategorySchema();
	return dbConn.model(CATEGORY_TABLE_NAME, ptSchema);
}

module.exports = CategoryObject;
