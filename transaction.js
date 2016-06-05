var express = require('express');
var transaction = require('./queries/transaction');
var currency = require('./queries/currency');
var router = express.Router();

// define the home page route
router.get('/', function(req, res) {
	req.pg.query(transaction.all(), (err, results) => {
		res.json({
			err: err,
			results: results.rows
		});
	});
});

router.get('/get', function(req, res) {
	req.pg.query(transaction.get(req.query.cid), (err, results) => {
		res.json({
			err: err,
			results: results.rows
		});
	});
});


router.post('/add', function(req, res) {
	req.pg.query(currency.pair(req.query.src,req.query.dest), (err, results) => {
		var rate = Number(results.rows[0].usd_val), Number(results.rows[1].usd_val);
		var transfered = Number(req.query.source_amount) * Number(results.rows[0].usd_val), Number(results.rows[1].usd_val);
		req.pg.query(transaction.add(req.query.aid, req.query.src, req.query.dest, Number(req.query.source_amount), transfered, rate), (err, results) => {
			
		});
	});	
});


module.exports = router;
