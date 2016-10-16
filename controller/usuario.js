var db = require('../db_config.js');

exports.usuario = function(id, callback) {
    db.Usuario.findById(id, function(err, usr) {
        if (err) {
            callback({error: 'Não foi possível encontrar o usuário!'})
        } else {
            if (usr == null) {
                callback({response: 'Nenhum usuário encontrado!'});
            } else {
                callback(usr);
            }
        }
    });
};

exports.list    = function(callback) {
    db.Usuario.find({}, function(err, usr) {
        if (err) {
            callback({error: 'Não foi possível encontrar os usuários!'})
        } else {
            callback(usr);
        }
    });
};

exports.save    = function(login, senha, email, callback) {
    new db.Usuario({
        login: login,
        senha: senha,
        email: email,
        Data_Criacao: new Date()
    }).save(function(err, usr) {
        if (err) {
            callback({error: 'Não foi possível salvar o usuário!'})
        } else {
            callback(usr);
        }
    });
};

exports.update  = function(id, login, senha, email, callback) {
    db.Usuario.findById(id, function(err, usr){
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
                callback({error: 'Não foi possível modificar o usuário!'})
            } else {
                callback(usr);
            }
        });
    });
};

exports.delete  = function(id, callback) {
    db.Usuario.findById(id, function(err, usr) {
        if (err) {
            callback({error: 'Não foi possível encontrar o usuário!'});
        } else {
            usr.remove(function(err) {
                if (!err) {
                    callback({response: 'Usuário excluído com sucesso!'});
                }
            })
        }
    });
};
