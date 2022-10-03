const express = require('express');
const { login } = require('../controllers/usuarios');
const usuariosRouter = require('./usuarios');
const categoriasRouter = require('./categorias');
const cuentasRouter = require('./cuentas');

const router = express.Router();

router.get('/', (req, res) => res.send('Hola mundo'));
router.post('/login', login);
router.use('/usuarios', usuariosRouter);
router.use('/categorias', categoriasRouter);
router.use('/cuentas', cuentasRouter);

module.exports = router;
