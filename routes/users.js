var express = require('express');
var router  = express.Router();

router.get('/', function(req, res, next) {
  res.end('GET users');
});

router.get('/:id', function(req, res, next) {
  res.end('GET users/' + req.params.id);
});

router.post('/', function(req, res, next) {
  res.end('POST users');
});

router.put('/', function(req, res, next) {
  res.end('PUT users');
});

router.delete('/:id', function(req, res, next) {
  res.end('DELETE users/' + req.params.id);
});

module.exports = router;
