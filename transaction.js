var express = require('express');
var transaction = require('./queries/transaction');
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
	req.pg.query(transaction.get(req.query.uid), (err, results) => {
		res.json({
			err: err,
			results: results.rows
		});
	});
});

router.post('/add', function(req, res) {
	req.pg.query(transaction.add(req.query.uid, req.query.cid, req.query.aid, req.query.amount), (err, results) => {
		res.json({
			err: err,
			results: null
		});		
	});	
});


module.exports = router;
