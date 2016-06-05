var squel = require("squel");

var _get = function(cid) {
	return squel.useFlavour('postgres').select()
			.from('currency')
			.where('cid = ?', cid)
			.toParam();
};

var _add = function(cur_name, usd_val) {
	return squel.useFlavour('postgres').insert()
			.into('currency')
			.set('cur_name', cur_name)
			.set('usd_val', usd_val)
			.toParam();
};

var _update = function(cid, usd_val) {
	return squel.useFlavour('postgres').update()
		.table('currency')
		.set('usd_val', usd_val)
		.where('cid = ?', cid)
		.toParam();
};

var _all = function() {
	return squel.useFlavour('postgres').select()
			.from('currency')
			.toString();
};

var _pair = function(src, dest) {
	return squel.useFlavour('postgres').select()
			.field('usd_val', 'usd_val')
			.from('currency')
			.where('cid in (?, ?)', src,dest)
			.toParam();
};

exports.all = _all;
exports.get = _get;
exports.add = _add;
exports.pair = _pair;
exports.update = _update;