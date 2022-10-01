const express = require('express');

const router = express.Router();
const usuariosController = require('../controllers/usuarios');
const authMiddleware = require('../middlewares/auth');

router
  .route('/')
  .get(authMiddleware, usuariosController.getUsuarios);

module.exports = router;
