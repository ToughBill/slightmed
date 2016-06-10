var dbconfig = require('dbconfig');
var MongoDb = require("mongodb").Db;
var Connection = require("mongodb").Connection;
var Server = require("mongodb").Server;

module.exports = new MongoDb(dbconfig.db, new Server(dbconfig.host, Connection.DEFAULT_PORT, {}));
