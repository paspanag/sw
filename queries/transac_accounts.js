var squel = require("squel");

var _get = function(aid) {
	return squel.useFlavour('postgres').select()
			.field('sum(amount) as balance')
			.from('transactions')
			.where('aid = ?', aid)
			.toParam();
};

exports.get = _get;