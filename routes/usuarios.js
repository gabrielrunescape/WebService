var express   = require('express');
var router    = express.Router();
var validator = require('validator');

var usuarioController = require('../controller/usuario.js');

router.get('/', function(req, res, next) {
    usuarioController.list(function(resp) {
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.json(resp);
    });
});

router.post('/:login/:senha', function(req, res, next) {
    var login = validator.trim(validator.escape(req.params.login));
    var senha = validator.trim(validator.escape(req.params.senha));

    usuarioController.usuario(login, senha, function(resp) {
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.json(resp);
    });
});

router.post('/', function(req, res, next) {
    var nome  = validator.trim(validator.escape(req.param('nome')));
    var sexo  = validator.trim(validator.escape(req.param('sexo')));
    var login = validator.trim(validator.escape(req.param('login')));
    var senha = validator.trim(validator.escape(req.param('senha')));
    var email = validator.trim(validator.escape(req.param('email')));

    usuarioController.save(nome, email, login, sexo, senha, function(resp) {
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.json(resp);
    });
});

router.put('/', function(req, res, next) {
    var id    = validator.trim(validator.escape(req.param('id') + ''));
    var nome  = validator.trim(validator.escape(req.param('nome')));
    var sexo  = validator.trim(validator.escape(req.param('sexo')));
    var login = validator.trim(validator.escape(req.param('login')));
    var senha = validator.trim(validator.escape(req.param('senha')));
    var email = validator.trim(validator.escape(req.param('email')));

    usuarioController.update(id, nome, email, login, sexo, senha, function(resp) {
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.json(resp);
    });
});

router.delete('/:id', function(req, res, next) {
    var id = validator.trim(validator.escape(req.param('id') + ''));

    usuarioController.delete(id, function(resp) {
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.json(resp);
    });
});

module.exports = router;
