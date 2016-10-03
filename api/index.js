var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./api/routes/index');   
var mongoose     = require('mongoose');
var morgan = require('morgan');
var Card     = require('./api/models/shoe');

mongoose.connect('localhost:27017/footwear');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.listen(8080, function(err){
	if(err) throw err;
	console.log('server');
});

app.use('/api', routes);
