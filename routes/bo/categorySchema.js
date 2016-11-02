var dbConn = require('./../db');
var CATEGORY_TABLE_NAME = "Category";

var ptSchema = new dbConn.Schema({
    id: Number,
    category: String,
    code: String
}, {collection: CATEGORY_TABLE_NAME});

module.exports = dbConn.model(CATEGORY_TABLE_NAME, ptSchema);