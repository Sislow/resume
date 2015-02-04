// Set about route
exports.about = function(req, res) {
	res.render('about', {
		title: 'About Us',
		classname: 'about'
	});

}