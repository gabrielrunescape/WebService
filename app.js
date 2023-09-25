import engine from 'express-engine-jsx';
import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//import { Request, Response } from 'express';

/*var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');*/

/*var usuarios	  = require('./routes/usuarios');
var funcionarios  = require('./routes/funcionarios');
var documentation = require('./routes/documentation');*/

import routes from './routes/index.js';

const app = express();

var allowCors = (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '127.0.0.1:3000');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', 'true');

	next();
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', engine);

app.use(allowCors);
/*app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));*/
app.use(express.static(path.join(__dirname, 'public')));

// Define as rotas da aplicação
/*app.use('/', routes);
app.use('/usuarios', usuarios);
app.use('/funcionarios', funcionarios);
app.use('/documentation', documentation);*/

// Porta da aplicação
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Servidor iniciado na porta ' + app.get('port'));
});

app.get('/', (req, res) => {
	res.locals.title = 'REST API';
	res.render('index', {});
});

app.get('/express_backend', (req, res) => { 
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('*', (req, res) => {
	res.locals.title = 'REST API - Página não encontrada';
	res.render('404', {});
});

export default app;
