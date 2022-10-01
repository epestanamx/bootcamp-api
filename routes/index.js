const express = require('express');
const { login } = require('../controllers/usuarios');
const usuariosRouter = require('./usuarios');
const categoriasRouter = require('./categorias');

const router = express.Router();

router.get('/', (req, res) => res.send('Hola mundo'));
router.post('/login', login);
router.use('/usuarios', usuariosRouter);
router.use('/categorias', categoriasRouter);

module.exports = router;
