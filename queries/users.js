var squel = require("squel");

var _get = function(uid) {
	return squel.useFlavour('postgres').select()
			.from('users')
			.where('uid = ?', uid)
			.toParam();
};

var _add = function(username, fullname, email, phone, base_cur) {
	return squel.useFlavour('postgres').insert()
			.into('users')
			.set('username', username)
			.set('fullname', fullname)
			.set('password', 'testingapp')
			.set('email', email)
			.set('phone', phone)
			.set('base_cur', base_cur)
			.toParam();
};

var _all = function() {
	return squel.useFlavour('postgres').select()
			.from('users')
			.toString();
};

exports.all = _all;
exports.get = _get;
exports.add = _add;