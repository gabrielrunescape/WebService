import express from 'express';
import validator from 'validator';

import {getUsuarioByLogin, getUsuarioByID, listAll, saveUsuario, updateUsuario, deleteUsuario} from '../controller/usuario.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
	res.locals.title = 'WebService - REST API';
    res.render('index', {});
});

router.post('/login', (req, res) => {
    try {
        const login = validator.trim(validator.escape(req.body.login));
        const senha = validator.trim(validator.escape(req.body.senha));
    
        getUsuarioByLogin(login, senha, resp => {
            res.header('Content-Type', 'application/json; charset=utf-8');
            res.json(resp);
        }, true);
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

router.post('/logout', (req, res) => {    
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.json({
        auth: false,
        token: null
    });
});

export default router;
