'use strict';
//'newrecipes', ['newrecipes']
//db: 'mongodb://localhost/newrecipes',
var mongoose = require('mongoose');
var express = require('express');
var app = express();
//var db = mongojs('newrecipes', ['newrecipes']);
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(express.static(__dirname +'/www'));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/newrecipes');

//load all models for database
fs.readdirSync(__dirname + '/models').forEach(function(filename){
	if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename);
});

//listens to get requests from the factory
app.get('/recipes:id', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	var id= req.params.id;
	console.log('Server reporting: I received a GET request for  ' + id);
//find function for database docs is the query result
mongoose.model('newrecipes').find({rname: id}, function(err, id){
	//db.newrecipes.find({rname: id}, function(err, id){
		if(err) res.json(err);
		//send data back to the factory
		else
		res.json(id);
	});
});

	app.get('/search:query', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	var query= req.params.query;

	console.log('Server reporting: I received a SEARCH request for  ' + query);
//find function for database docs is the query result
//	db.collection('newrecipes').find({ $text: { $search: query } } , function(err, query){
	mongoose.model('newrecipes').find({ $text: { $search: query } }, function(err, query){
		if(err) res.json(err);
		else
		//send data back to the factory
		res.json(query);
	});
});


app.listen(3000);
console.log('server running port 3000');
