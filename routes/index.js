const express = require('express');
const { login } = require('../controllers/usuarios');
const usuariosRouter = require('./usuarios');

const router = express.Router();

router.get('/', (req, res) => res.send('Hola mundo'));
router.post('/login', login);
router.use('/usuarios', usuariosRouter);

module.exports = router;
