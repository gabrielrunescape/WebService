var mysql  = require('../db_config.js');
var bcrypt = require('bcryptjs');

exports.usuario = function(id, callback) {
    mysql.query("SELECT * FROM Usuario WHERE Login = ?", login, function(err, usr) {
        if (err) {
            callback({error: err});;
        } else {
            if (usr == null) {
                callback({response: 'Nenhum usuário encontrado!'});
            } else {
                callback(usr);
            } // close if usr is null
        } // close if err
    }); // close mysql.query
};

exports.usuario = function(login, senha, callback) {
    mysql.query("SELECT * FROM Usuario WHERE Login = ?", login, function(err, usr) {
        if (err) {
            callback({error: err});
        } else {
            if (usr == null) {
                callback({response: 'Nenhum usuário encontrado!'});
            } else {
                bcrypt.compare(senha, usr[0].Senha, function(err, hash) {
                    if (err) callback({error: err});

                    if (hash == true) {
                        callback(usr);
                    } else {
                        callback({response: 'Senha inválida!'});
                    } // close hash is true
                }); // close bcrypt.compare
            } // close if usr is null
        } // close if err
    }); // close mysql.query
};

exports.list    = function(callback) {
    mysql.query("SELECT * FROM Usuario", function(err, usr) {
        if (err) {
            callback({error: err});
        } else {
            callback(usr);
        } // close if err
    }); // close mysql.query
};

exports.save    = function(nome, email, login, sexo, senha, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(senha, salt, function(err, hash) {
            var usuario = {
                ID: 'NULL',
                Nome: nome,
                Login: login,
                Sexo: sexo,
                Senha: hash,
                Email: email,
                Data_Criacao: new Date()
            };

            mysql.query("INSERT INTO Usuario SET ?", usuario, function(err, res) {
                if (err) {
                    callback({error: err});
                } else {
                    mysql.query("SELECT * FROM Usuario WHERE ID = ?", res.insertId, function(error, usr) {
                        if (error) {
                            callback({error: error});
                        } else {
                            callback(usr);
                        } // close if error
                    }); // close mysql.query
                } // close if err
            }); // close mysql.query
        }); // Close bcrypt.hash
    }); // Close bcrypt.genSalt
};

exports.update  = function(id, nome, email, login, sexo, senha, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(senha, salt, function(err, hash) {
            var usuario = {
                Nome: nome,
                Login: login,
                Sexo: sexo,
                Senha: hash,
                Email: email
            };

            mysql.query("UPDATE Usuario SET ? WHERE ID = " + id, usuario, function(err, res) {
                if (err) {
                    callback({error: 'Não foi possível modificar o usuário!'});
                } else {
                    mysql.query("SELECT * FROM Usuario WHERE ID = ?", id, function(error, usr) {
                        if (error) {
                            callback({error: error});
                        } else {
                            callback(usr);
                        } // close if error
                    }); // close mysql.query
                } // close if err
            }); // close mysql.query
        }); // close bcrypt.hash
    }); // close bcrypt.genSalt
};

exports.delete  = function(id, callback) {
    mysql.query("DELETE FROM Usuario WHERE ID = ?", id, function(err, res) {
        if (err) {
            callback({error: 'Não foi possível encontrar o usuário!'});
        } else {
            callback({response: 'Usuário excluído com sucesso!'});
        } // close if err
    }); // mysql.query
};
