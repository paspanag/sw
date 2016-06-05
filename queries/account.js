var squel = require("squel");

var _get = function(aid) {
	return squel.useFlavour('postgres').select()
			.from('accounts')
			.where('aid = ?', aid)
			.toParam();
};

var _add = function(uid, base_cur) {
	return squel.useFlavour('postgres').insert()
			.into('accounts')
			.set('uid', uid)
			.set('base_cur', base_cur)
			.set('balance', 0)
			.toParam();
};

var _update = function(uid, aid, balance, base_cur) {
	return squel.useFlavour('postgres').update()
		.table('accounts')
		.set('balance', balance)
		.where('uid', uid)
		.where('aid', aid)
		.toParam();
};

var _all = function() {
	return squel.useFlavour('postgres').select()
			.from('accounts')
			.toString();
};

exports.all = _all;
exports.get = _get;
exports.add = _add;
exports.update = _update;