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
		title: 'Showcase',
		classname: 'app'
	});

}

// Set login route
exports.login = function(req, res) {
	res.render('login', {
		title: 'Login',
		classname: 'login'
	});

}

// Set error page
exports.wrong = function(req, res) {
	res.send('Page not found: 404');
}