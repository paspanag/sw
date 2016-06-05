var express = require('express');
var users = require('./queries/users')
var router = express.Router();

router.get('/', function(req, res) {
	req.pg.query(users.all(), (err, results) => {
		res.json({
			err: err,
			results: results.rows
		});
	});
});

router.get('/get', function(req, res) { 
	req.pg.query(users.get(req.query.uid), (err, results) => {
		res.json({
			err: err,
			results: results.rows
		});
	});
});

router.post('/add', function(req, res) {
	req.pg.query(users.add(req.query.username, req.query.fullname, req.query.email, req.query.phone, req.query.base_cur), (err, results) => {
		res.json({
			err: err,
			results: null
		});
	});
});



module.exports = router;
