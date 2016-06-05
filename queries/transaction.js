var squel = require('squel');

var _get = function(tid) {
	return squel.useFlavour('postgres').select()
			.from('transactions')
			.where('tid = ?', tid)
			.toParam();
};

var _add = function(uid, cid, aid, amount) {
	return squel.useFlavour('postgres').insert()
			.into('transactions')
			.set('uid', uid)
			.set('cid', cid)
			.set('aid', aid)
			.set('amount', amount)
			.toParam();
};

var _all = function() {
	return squel.useFlavour('postgres').select()
			.from('transactions')
			.toString();
};

exports.all = _all;
exports.get = _get;
exports.add = _add;
