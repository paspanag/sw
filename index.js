var express = require('express');
var pg = require('pg');

// routes
var users = require('./users');
var account = require('./account');
var currency = require('./currency');
var transaction = require('./transaction');
var bodyParser = require('body-parser');

var app = express();


app.use(express.static('public'));

pg.defaults.user = 'peter';
pg.defaults.password = 'admin1234';

//pg.connect("postgres://lcpxmkcq:bQQYwLXw8X2w5aFFkXn-vIQAZQLXgvFo@pellefant.db.elephantsql.com:5432/lcpxmkcq", function(err, client, done) {
pg.connect("postgres://localhost:5432/postgres", function(err, client, done) {
	if (err) {
		console.log(err);
	};
	app.use((req, res, next) => {
		req.pg = client;
		next();
	});
	app.use(bodyParser.urlencoded({extended : true}));
	app.use(bodyParser.json());
	app.use(bodyParser.text());
	app.use('/users', users);
	app.use('/account', account);
	app.use('/currency', currency);
	app.use('/transaction', transaction);
	app.listen(3000, function () {
		console.log('running');
	});
});
