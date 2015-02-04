// Set info route
exports.dev = function(req, res) {
	res.render('dev', {
		title: 'Showcase',
		classname: 'app'
	});

}