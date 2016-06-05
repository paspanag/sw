var express = require('express');
var pg = require('pg');

// routes
var users = require('./users');
var account = require('./account');
var currency = require('./currency');
var app = express();

app.use(express.static('h5bp'));

pg.defaults.user = 'peter';
pg.defaults.password = 'admin1234';

pg.connect("postgres://localhost/postgres", function(err, client, done) {
	if (err) {
		console.log(err);
	};
	app.use((req, res, next) => {
		req.pg = client;
		next();
	});
	app.use('/users', users);
	app.use('/account', account);
	app.use('/currency', currency);
	app.listen(3000, function () {
	  console.log('running');
	});
});