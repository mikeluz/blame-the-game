var express = require('express'); // requires express.js
var app = express(); // defines app.js as an instance of express

var morgan = require('morgan'); // logging middleware
var bodyParser = require('body-parser'); // required to access body of HTTP requests

var path = require('path'); // node module that provides utilities for working with file and directory path
module.exports = app; // exports app so it can be used/referenced elsewhere in program

app.use(morgan('dev')); // 'dev" is a built-in morgan format option, see morgan docs
app.use(express.static(path.join(__dirname, './public'))); // sets "/public" folder to static
app.use(bodyParser.urlencoded({ extended: false })); // enables parsing of url-encoded bodies, a new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body). This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).
app.use(bodyParser.json()); // enables parsing of .json

app.get('/', function (req, res, next) {
	res.render('index');
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).send(err.message);
});