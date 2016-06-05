var pg = require('pg');
var express = require('express');
var account = require('./queries/account');
var transac_account = require('./queries/transac_accounts');
var router = express.Router();

router.get('/', function(req, res) {
	req.pg.query(account.all(), (err, results) => {
		res.json({
			err: err,
			results: results.rows
		});
	});
});

router.get('/get', function(req, res) { 
	req.pg.query(account.all(req.query.uid), (err, results) => {
		res.json({
			err: err,
			results: results.rows
		});
	});
});


router.get('/balance', function(req, res) {
	req.pg.query(transac_account.get(req.query.aid), (err, results) => {
		res.json({
			err: err,
			results: results.rows
		});
	});	
});

router.post('/add', function(req, res) {
	req.pg.query(account.add(req.query.uid, req.query.base_cur), (err, results) => {
		res.json({
			err: err,
			results: null
		});
	});	
});

router.post('/update', function(req, res) {
	req.pg.query(account.update(req.query.uid, req.query.aid, req.query.balance), (err, results) => {
		res.json({
			err: err,
			results: null
		});
	});	
});



module.exports = router;
