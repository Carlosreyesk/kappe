var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var mongoose     = require('mongoose');
var morgan = require('morgan');
var Card     = require('./models/shoe');

mongoose.connect('localhost:27017/footwear');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.listen(8080, function(err){
	if(err) throw err;
	console.log('server');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', routes);

