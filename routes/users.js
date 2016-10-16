var express = require('express');
var router  = express.Router();

var db_string = 'mongodb://127.0.0.1/api';
var mongoose  = require('mongoose').connect(db_string);

var database  = mongoose.connection;
var Usuario;

database.on('error', console.error.bind(console, 'Erro ao conectar ao banco!'));

database.once('open', function() {
    var userSchema = mongoose.Schema({
        login: String,
        senha: String,
        email: String,
        Data_Criacao: Date
    });

    Usuario = mongoose.model('Usuario', userSchema);
});

router.get('/', function(req, res, next) {
    Usuario.find({}, function(err, usr) {
        if (err) {
            res.json({error: 'Não foi possível encontrar os usuários!'})
        } else {
            res.json(usr);
        }
    });
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;

    Usuario.findById(id, function(err, usr) {
        if (err) {
            res.json({error: 'Não foi possível encontrar o usuário!'})
        } else {
            res.json(usr);
        }
    });
});

router.post('/', function(req, res, next) {
    var login = req.params.login;
    var senha = req.params.senha;
    var email = req.params.email;

    new Usuario({
        login: login,
        senha: senha,
        email: email,
        Data_Criacao: new Date()
    }).save(function(err, usr) {
        if (err) {
            res.json({error: 'Não foi possível salvar o usuário!'})
        } else {
            res.json(usr);
        }
    })
});

router.put('/', function(req, res, next) {
    var id    = req.params.id;
    var login = req.params.login;
    var senha = req.params.senha;
    var email = req.params.email;

    Usuario.findById(id, function(err, usr){
        if (login) {
            usr.login = login;
        }

        if (senha) {
            usr.senha = senha;
        }

        if (email) {
            usr.email = email;
        }

        usr.save(function(err, usr) {
            if (err) {
                res.json({error: 'Não foi possível modificar o usuário!'})
            } else {
                res.json(usr);
            }
        });
    });
});

router.delete('/:id', function(req, res, next) {
    var id = req.params.id;

    Usuario.findById(id, function(err, usr) {
        if (err) {
            res.json({error: 'Não foi possível encontrar o usuário!'})
        } else {
            usr.remove(function(err) {
                if (!err) {
                    res.json({response: 'Usuário excluído com sucesso!'});
                }
            })
        }
    });
});

module.exports = router;
