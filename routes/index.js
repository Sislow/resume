// Set main blank route
exports.index = function(req, res) {
	res.render('default', {
		title: 'Home',
		classname: 'home'
	});

}

// Set info route
exports.playground = function(req, res) {
	res.render('playground', {
		title: 'Playground',
		classname: 'playground'
	});

}

// Set login route
exports.blog = function(req, res) {
	res.render('blog', {
		title: 'blog',
		classname: 'blog'
	});

}

// Set error page
exports.wrong = function(req, res) {
	res.send('Page not found: 404');
}
