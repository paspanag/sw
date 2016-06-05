var squel = require('squel');

var _get = function(tid) {
	return squel.useFlavour('postgres').select()
			.from('transactions')
			.where('tid = ?', tid)
			.toParam();
};

var _add = function(aid, source_cur, dest_cur, source_amount, dest_amount, rate) {
	return squel.useFlavour('postgres').insert()
			.into('transations')
			.set('uid', source_cur)
			.set('source_cur', source_cur)
			.set('dest_cur', dest_cur)
			.set('source_amount', source_amount)
			.set('dest_amount', dest_amount)
			.set('rate', rate)
			.toParam();
};

var _all = function() {
	return squel.useFlavour('postgres').select()
			.from('transations')
			.toString();
};

exports.all = _all;
exports.get = _get;
exports.add = _add;
