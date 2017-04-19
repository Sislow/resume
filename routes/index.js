// Set main blank route
exports.index = function(req, res) {
	res.render('default', {
		title: 'Home',
		classname: 'home'
	});

}

// Set about route
exports.about = function(req, res) {
	res.render('about', {
		title: 'About Us',
		classname: 'about'
	});

}

// Set info route
exports.dev = function(req, res) {
	res.render('dev', {
		title: 'Playground',
		classname: 'app'
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
