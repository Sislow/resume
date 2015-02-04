// initialize
var express = require('express'), http = require('http');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

// utilize routes folder
var routes = require('./routes');

// Set view engine for app
app.set('view engine', 'ejs'); 
app.use("/styles", express.static(__dirname + "/styles"));
app.use("/images", express.static(__dirname + "/images"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.locals.appdata = require('./data.json');

// Set pages
app.get('ohportfolio.azurewebsites.net/', routes.index);
app.get('ohportfolio.azurewebsites.net/about', routes.about);
app.get('ohportfolio.azurewebsites.net/dev', routes.dev);
app.get('ohportfolio.azurewebsites.net/login', routes.login);
app.get('*', routes.wrong);

var server = http.createServer(app);
app.listen(port);
