import express from 'express';

var router = express.Router();

router.get('/', (req, res, next) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.render('index', { title: 'WebServive - API' });
});

export default router;
