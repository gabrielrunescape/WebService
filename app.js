var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

var routes		  = require('./routes/index');
var users		  = require('./routes/users');
var documentation = require('./routes/documentation');

var app = express();

var allowCors = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '127.0.0.1:3000');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', 'true');

	next();
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Bootstrap e JQuery
app.use('/javascript', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/javascript', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/stylesheet', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(allowCors);
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Define as rotas da aplicação
app.use('/', routes);
app.use('/users', users);
app.use('/documentation', documentation);

// Porta da aplicação
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Servidor iniciado na porta ' + app.get('port'));
});


module.exports = app;
