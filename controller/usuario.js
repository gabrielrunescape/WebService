import bcrypt from 'bcrypt';
import dotenv from 'dotenv-safe';
import jwt from 'jsonwebtoken';
import util from 'util';

import mysql from '../db_config.js';

export const getUsuarioByID = (id, callback) => {
    mysql.query("SELECT * FROM Usuario WHERE ID = ?", id, (err, usr) => {
        if (err) {
            callback({
                response: 'query_fail',
                message: 'Houve um erro ao realizar a consulta.',
                error: err
            });
        } else {
            if (usr == null || typeof usr[0] == 'undefined') {
                callback({
                    response: 'query_fail',
                    message: 'Nenhum usuário encontrado!'
                });
            } else {
                callback(usr);
            } // close if usr is null
        } // close if err
    }); // close mysql.query
};

export const listAll = (callback) => {
    mysql.execute("SELECT * FROM Usuario", (err, usr) => {
        if (err) {
            callback({error: err});
        } else {
            callback(usr);
        }
    });
};

export const getUsuarioByLogin = (login, senha, callback, isAuth = false) => {
    mysql.query("SELECT * FROM Usuario WHERE Login = ? LIMIT 1", login, (err, usr) => {
        if (err) {
            var response = {
                response: 'login_fail',
                message: 'Houve um erro ao realizar a consulta.',
                error: err
            }

            callback(response);
        } else {
            if (usr == null || typeof usr[0] == 'undefined') {
                var response = {
                    response: 'login_fail',
                    message: 'Nenhum usuário foi encontrado!'
                }

                callback(response);
            } else {
                bcrypt.compare(senha, usr[0].Senha, (err, hash) => {
                    var response = {};

                    if (err) {
                        response = {
                            response: 'login_fail',
                            message: 'Houve um erro ao comparar a criptografia.',
                            error: err
                        }
                    }

                    if (hash == true) {
                        if (isAuth) {
                            response = {
                                auth: true,
                                token: usr[0].Token
                            }
                        } else {
                            response = {
                                response: 'login_ok',
                                message: 'Usuário encontrado com sucesso!',
                                usuario: usr[0]
                            }
                        }
                    } else {
                        response = {
                            response: 'login_fail',
                            message: 'Senha inválida!'
                        }
                    }

                    callback(response);
                }); // close bcrypt.compare
            } // close if usr is null
        } // close if err
    }); // close mysql.query
};

export const saveUsuario = (nome, email, login, sexo, senha, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(senha, salt, (err, hash) => {
            var usuario = {
                Nome: nome,
                Login: login,
                Token: createToken(login),
                Sexo: sexo,
                Senha: hash,
                Email: email,
                Data_Criacao: new Date()
            };

            mysql.query("INSERT INTO Usuario SET ?", usuario, (err, res) =>{
                if (err) {
                    const duplicate = util.format("Duplicate entry '%s' for key 'Usuario.Login_UNIQUE'", login);

                    if (err.sqlMessage == duplicate) {
                        callback({
                            response: 'query_fail',
                            message: 'Houve um erro de duplicidade de dados no campo login.',
                            error: err.code
                        });
                    } else {
                        callback({error: err});
                    }
                } else {
                    mysql.query("SELECT * FROM Usuario WHERE ID = ?", res.insertId, (error, usr) => {
                        if (error) {
                            callback({
                                response: 'query_fail',
                                message: 'Houve um erro ao realizar a consulta.',
                                error: error
                            });
                        } else {
                            callback({
                                response: 'query_ok',
                                message: 'Usuário inserido com sucesso!',
                                usuario: usr[0]
                            });
                        } // close if error
                    }); // close mysql.query
                } // close if err
            }); // close mysql.query
        }); // Close bcrypt.hash
    }); // Close bcrypt.genSalt
};

export const updateUsuario = (id, nome, email, login, sexo, senha, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(senha, salt, (err, hash) => {
            var usuario = {
                Nome: nome,
                Login: login,
                Sexo: sexo,
                Senha: hash,
                Email: email
            };

            mysql.query("UPDATE Usuario SET ? WHERE ID = " + id, usuario, (err, res) =>{
                if (err) {
                    callback({
                        response: 'query_fail',
                        message: 'Não foi possível modificar o usuário.',
                        error: err
                    });
                } else {
                    mysql.query("SELECT * FROM Usuario WHERE ID = ?", id, (error, usr) => {
                        var response = {};

                        if (error) {
                            response = {
                                response: 'query_fail',
                                message: 'Não foi possível modificar o usuário.',
                                error: error
                            }
                        } else {
                            if(usr[0] == null) {
                                response = {
                                    response: 'query_fail',
                                    message: 'Usuário não encontrado!',
                                    usuario: usr[0]
                                }
                            } else {
                                response = {
                                    response: 'query_ok',
                                    message: 'Usuário alterado com sucesso!',
                                    usuario: usr[0]
                                }
                            }
                        }

                        callback(response);
                    }); // close mysql.query
                } // close if err
            }); // close mysql.query
        }); // close bcrypt.hash
    }); // close bcrypt.genSalt
};

export const deleteUsuario = (id, callback) => {
    mysql.query("DELETE FROM Usuario WHERE ID = ?", id, (err, res) => {
        var response = {};

        if (err) {
            response = {
                response: 'delete_fail',
                message: 'Não foi possível encontrar o usuário.',
                error: err
            }
        } else {
            if (res.affectedRows == 0) {
                response = {
                    response: 'delete_fail',
                    message: 'Nenhum usuário foi excluído!'
                }
            } else {
                response = {
                    response: 'delete_ok',
                    message: 'Usuário excluído com sucesso!'
                }
            }
        }

        callback(response);
    }); // mysql.query
};

const createToken = params => {
	dotenv.config();

	const token = jwt.sign({params}, process.env.SECRET, {
		expiresIn: '7 days'
	});

	return token;
}

const verifyToken = token => {
	try {
		const decoded = jwt.verify(token, process.env.SECRET)
	} catch (err) {
		console.error(err);
	}
}
