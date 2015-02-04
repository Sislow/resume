// Set main blank route
exports.index = function(req, res) {
	res.render('default', {
		title: 'Home',
		classname: 'home'
	});

}

// Set error page
exports.wrong = function(req, res) {
	res.send('Page not found: 404');
}