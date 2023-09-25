import express from 'express';

var router = express.Router();

router.get('/', (req, res, next) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
	res.locals.title = 'WebService - REST API';
    res.render('index', {});
});

export default router;
