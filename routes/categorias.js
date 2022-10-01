const express = require('express');

const router = express.Router();
const categoriasController = require('../controllers/categorias');
const authMiddleware = require('../middlewares/auth');

router.route('/')
  .get(authMiddleware, categoriasController.getCategorias)
  .post(authMiddleware, categoriasController.createCategorias);

router.route('/:id')
  .get(authMiddleware, categoriasController.getCategoria)
  .put(authMiddleware, categoriasController.updateCategorias)
  .delete(authMiddleware, categoriasController.deleteCategorias);

module.exports = router;
