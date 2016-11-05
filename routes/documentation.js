var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.render('./documentation/index', { title: 'WebServive - Documentação' });
});

module.exports = router;
