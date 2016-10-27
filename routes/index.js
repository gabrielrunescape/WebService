var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WebServive - API' });
});

router.get('*', function(req, res, next) {
    if (res.status(404)) {
        res.render('404', { title: 'Não encontrado - API' });
    }
});

module.exports = router;
