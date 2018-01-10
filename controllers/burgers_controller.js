// Inside your burger directory, create a folder named controllers.
// In controllers, create the burgers_controller.js file.
// Inside the burgers_controller.js file, import the following:

// Express
// burger.js

// Create the router for the app, and export the router at the end of your file.

var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/',function(req, res){
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
	burger.selectAll(function(data){
		var hbsObject = {burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req, res){
	burger.insertOne('burger_name',req.body.name, function() {
		res.redirect('/burgers');
			});
		});

router.put('/burgers/update/:id', function(req, res){
	

	burger.updateOne('burgers', 1, req.params.id, function (){
		res.redirect('/burgers');

	});
});

module.exports=router;