var express = require('express');
var currency = require('./queries/currency');
var router = express.Router();

// define the home page route
router.get('/', function(req, res) {
	req.pg.query(currency.all(), (err, results) => {
		res.json({
			err: err,
			results: results.rows
		});
	});
});

router.get('/get', function(req, res) {
	req.pg.query(currency.get(req.query.cid), (err, results) => {
		res.json({
			err: err,
			results: results.rows
		});
	});
});


router.post('/add', function(req, res) {
	req.pg.query(currency.add(req.query.cur_name, req.query.usd_val), (err, results) => {
		res.json({
			err: err,
			results: null
		});
	});	
});

router.post('/update', function(req, res) {
	req.pg.query(currency.update(req.query.cid, req.query.usd_val), (err, results) => {
		res.json({
			err: err,
			results: null
		});
	});	
});


module.exports = router;
