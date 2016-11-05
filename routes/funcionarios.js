var express   = require('express');
var router    = express.Router();
var validator = require('validator');

var funcionarioController = require('../controller/funcionario.js');

router.get('/', function(req, res, next) {
    funcionarioController.list(function(resp) {
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.json(resp);
    });
});

router.post('/', function(req, res, next) {
    var nome  = validator.trim(validator.escape(req.param('nome')));
    var cep   = req.param('cep');
    var num   = validator.trim(validator.escape(req.param('numero')));
    var comp  = validator.trim(validator.escape(req.param('complemento')));
    var email = req.param('email');
    var cpf   = validator.trim(validator.escape(req.param('cpf')));
    var rg    = validator.trim(validator.escape(req.param('rg')));
    var obs   = validator.trim(validator.escape(req.param('observacao')));
    var user  = req.param('usuario');
    var data  = validator.toDate(req.param('data_nascimento'));

    if (obs == "") {
        obs = null;
    }

    if (comp == "") {
        comp = null;
    }

    var funcionario = {
        ID: 'NULL',
        Nome: nome,
        CEP: cep,
        Numero: num,
        Complemento: comp,
        Email: email,
        Ativo: 1,
        CPF: cpf,
        RG: rg,
        Observacao: obs,
        Usuario: user,
        Data_Criacao: new Date(),
        Data_Alteracao: new Date(),
        Data_Nascimento: data
    };

    funcionarioController.save(funcionario, function(resp) {
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.json(resp);
    });
});

router.put('/', function(req, res, next) {
    var id      = req.param('id');
    var nome    = validator.trim(validator.escape(req.param('nome')));
    var cep     = req.param('cep');
    var numero  = validator.trim(validator.escape(req.param('numero')));
    var comp    = validator.trim(validator.escape(req.param('complemento')));
    var email   = req.param('email');
    var ativo   = req.param('ativo');
    var cpf     = validator.trim(validator.escape(req.param('cpf')));
    var rg      = validator.trim(validator.escape(req.param('rg')));
    var obs     = validator.trim(validator.escape(req.param('observacao')));
    var user    = req.param('usuario');
    var data_c  = validator.toDate(req.param('data_criacao'));
    var data_n  = validator.toDate(req.param('data_nascimento'));

    if (obs == "") {
        obs = null;
    }

    if (comp == "") {
        comp = null;
    }

    var funcionario = {
        ID: id,
        Nome: nome,
        CEP: cep,
        Numero: numero,
        Complemento: comp,
        Email: email,
        Ativo: ativo,
        CPF: cpf,
        RG: rg,
        Observacao: obs,
        Usuario: user,
        Data_Criacao: data_c,
        Data_Alteracao: new Date(),
        Data_Nascimento: data_n
    };

    funcionarioController.update(id, funcionario, function(resp) {
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.json(resp);
    });
});

router.delete('/', function(req, res, next) {
    var id = req.param('id');

    funcionarioController.delete(id, function(resp) {
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.json(resp);
    });
});

module.exports = router;
