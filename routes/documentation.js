import express from 'express';
const documentation = express.Router();

documentation.get('/', function(req, res) {
    res.header('Content-Type', 'text/html; charset=utf-8');

	res.locals.title = 'WebService - Documentação';
    res.locals.location = 'documentatioin';

    res.render('./documentation/index', {});
});

documentation.get('/methods', function(req, res) {
    res.header('Content-Type', 'text/html; charset=utf-8');

	res.locals.title = 'WebService - Metódos';
    res.locals.location = 'methods';

    res.render('./documentation/method', {});
});

documentation.get('/pages', function(req, res) {
    res.header('Content-Type', 'text/html; charset=utf-8');

	res.locals.title = 'WebService - Páginas';
    res.locals.location = 'pages';

    res.render('./documentation/page', {});
});

export default documentation;
