// Set login route
exports.login = function(req, res) {
	res.render('login', {
		title: 'Login',
		classname: 'login'
	});

}