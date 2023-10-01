import express from 'express';
import validator from 'validator';

const usuarios = express.Router();

import {getUsuarioByLogin, getUsuarioByID, listAll, saveUsuario, updateUsuario, deleteUsuario} from '../controller/usuario.js';

usuarios.get('/', (req, res) => {
    listAll((resp) => {
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.json(resp);
    });
});

usuarios.get('/:id', (req, res, next) => {
    getUsuarioByID(req.body.id, (resp) => {
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.json(resp);
    });
});

usuarios.post('/:login/:senha', (req, res) => {
    try {
        const login = validator.trim(validator.escape(req.body.login));
        const senha = validator.trim(validator.escape(req.body.senha));
    
        getUsuarioByLogin(login, senha, function(resp) {
            res.header('Content-Type', 'application/json; charset=utf-8');
            res.json(resp);
        });
    } catch (err) {
        console.error(err)

        res.header('Content-Type', 'application/json; charset=utf-8');
        res.json({
            response: 'params_fail',
            message: 'Houve um erro ao realizar a consulta.',
            error: err.message
        });
    }
});

usuarios.post('/', (req, res) => {
    try {
        const email = validator.trim(validator.escape(req.body.email));
        const login = validator.trim(validator.escape(req.body.login));
        const nome  = validator.trim(validator.escape(req.body.nome));
        const senha = validator.trim(validator.escape(req.body.senha));
        const sexo  = validator.trim(validator.escape(req.body.sexo));
    
        saveUsuario(nome, email, login, sexo, senha, function(resp) {
            res.header('Content-Type', 'application/json; charset=utf-8');
            res.json(resp);
        });
    } catch (err) {
        console.error(err)

        res.header('Content-Type', 'application/json; charset=utf-8');
        res.json({
            response: 'params_fail',
            message: 'Houve um erro ao enviar parametros passados.',
            error: err.message
        });
    }
});

usuarios.put('/', (req, res) => {    
    try {
        var email = validator.trim(validator.escape(req.body.email));
        var id = validator.trim(validator.escape(req.body.id));
        var login = validator.trim(validator.escape(req.body.login));
        var nome  = validator.trim(validator.escape(req.body.nome));
        var senha = validator.trim(validator.escape(req.body.senha));
        var sexo  = validator.trim(validator.escape(req.body.sexo));

        updateUsuario(id, nome, email, login, sexo, senha, (resp) => {
            res.header('Content-Type', 'application/json; charset=utf-8');
            res.json(resp);
        });
    } catch (err) {
        console.error(err)

        res.header('Content-Type', 'application/json; charset=utf-8');
        res.json({
            response: 'params_fail',
            message: 'Houve um erro ao enviar parametros passados.',
            error: err.message
        });
    }
});

usuarios.delete('/:id', (req, res) => {
    try {
        var id = validator.trim(validator.escape(req.body.id));
        

        deleteUsuario(id, (resp) => {
            res.header('Content-Type', 'application/json; charset=utf-8');
            res.json(resp);
        });
    } catch (err) {
        console.error(err)

        res.header('Content-Type', 'application/json; charset=utf-8');
        res.json({
            response: 'params_fail',
            message: 'Houve um erro ao enviar parametros passados.',
            error: err.message
        });
    }
});

export default usuarios;