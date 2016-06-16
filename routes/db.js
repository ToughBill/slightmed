
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/slightmed');
mongoose.connection.on('connected', function(){
	console.log('Mongoose connected to slightmed');
});
mongoose.connection.on('error', function(err){
	console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconnected');
});

process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('Mongoose disconnected through app termination');
	});
	process.exit(0);
});

module.exports = mongoose;
