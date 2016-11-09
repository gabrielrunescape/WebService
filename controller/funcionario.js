var mysql  = require('../db_config.js');
var bcrypt = require('bcryptjs');

exports.funcionario = function(id, callback) {
    mysql.query("SELECT * FROM Funcionario WHERE ID = ?", id, function(err, fnc) {
        var response = {};

        if (err) {
            response = {
                response: 'query_fail',
                message: 'Houve um erro ao realizar a consulta.',
                error: err
            };
        } else {
            if (fnc == null || typeof fnc[0] == 'undefined') {
                response = {
                    response: 'query_fail',
                    message: 'Nenhum usuário encontrado!'
                };
            } else {
                response = {
                    response: 'query_ok',
                    message: 'Funcionário encontrado com sucesso!',
                    usuario: fnc[0]
                };
            }
        }

        callback(response);
    }); // close mysql.query
};

exports.list = function(callback) {
    mysql.query("SELECT * FROM Funcionario", function(err, fnc) {
        if (err) {
            callback({
                response: 'query_fail',
                message: 'Houve um erro ao realizar a consulta.',
                error: err
            });
        } else {
            callback(fnc);
        } // close if err
    }); // close mysql.query
};

exports.save = function(funcionario, callback) {
    mysql.query("INSERT INTO Funcionario SET ?", funcionario, function(err, res) {
        if (err) {
            callback({
                response: 'query_fail',
                message: 'Houve um erro ao inserir o funcionário.',
                error: err
            });
        } else {
            mysql.query("SELECT * FROM Funcionario WHERE ID = ?", res.insertId, function(error, fnc) {
                if (error) {
                    callback({
                        response: 'query_fail',
                        message: 'Houve um erro ao realizar a consulta.',
                        error: err
                    });
                } else {
                    callback({
                        response: 'query_ok',
                        message: 'Funcionário inserido com sucesso!',
                        usuario: fnc[0]
                    });
                } // close if error
            }); // close mysql.query
        } // close if err
    }); // close mysql.query
};

exports.update  = function(id, funcionario, callback) {
    mysql.query("UPDATE Funcionario SET ? WHERE ID = " + id, funcionario, function(err, res) {
        if (err) {
            callback({
                response: 'query_fail',
                message: 'Não foi possível modificar o funcionário!',
                error: err
            });
        } else {
            mysql.query("SELECT * FROM Funcionario WHERE ID = ?", id, function(error, fnc) {
                if (error) {
                    callback({
                        response: 'query_fail',
                        message: 'Houve um erro ao realizar a consulta.',
                        error: error
                    });
                } else {
                    callback({
                        response: 'query_ok',
                        message: 'Funcionário alterado com sucesso!',
                        usuario: fnc[0]
                    });
                } // close if error
            }); // close mysql.query
        } // close if err
    }); // close mysql.query
};

exports.delete  = function(id, callback) {
    mysql.query("DELETE FROM Funcionario WHERE ID = ?", id, function(err, res) {
        if (err) {
            callback({
                response: 'query_fail',
                message: 'Não foi possível encontrar o funcionário!',
                error: err
            });
        } else {
            callback({
                response: 'query_ok',
                message: 'Funcionário excluído com sucesso!'
            }); // close callback
        } // close if err
    }); // mysql.query
};
