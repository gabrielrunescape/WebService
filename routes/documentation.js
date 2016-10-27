var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('./documentation/index', { title: 'WebServive - Documentação' });
});

module.exports = router;
