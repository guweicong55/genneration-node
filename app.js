var express = require('express');
var logger =require('morgan');
var bodyParser = require('body-parser');

var config = require('./doc/config');
var urls = require('./doc/urls');

var app = express();

app.use(logger());
app.use(express.static('./app/static'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

urls(app);

// 404
app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(404).send('Not Find!');
	next();
});

//500
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500).send('Something Wrong!');
	next();
});

app.listen(config.PORT, function () {
	console.log('server is running at ' + config.PORT + '\n' + new Date());
});