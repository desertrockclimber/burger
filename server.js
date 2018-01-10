
// Require the following npm packages inside of the server.js file:


// express
// method-override
// body-parser

var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');

var routes=require('./controllers/burgers_controller.js');
app.use(routes);

var port = 3000;
app.listen(port, function() {
	console.log("App listening on Port: " + port);
	console.log("localhost:"+ port + "/");

});


// connect to mysql using the connection.js file