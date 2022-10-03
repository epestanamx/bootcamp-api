const express = require('express');

const router = express.Router();
const cuentasController = require('../controllers/cuentas');
const authMiddleware = require('../middlewares/auth');

router.route('/')
  .get(authMiddleware, cuentasController.getCuentas);

router.route('/:idCuenta/detalle')
  .get(authMiddleware, cuentasController.getCuentasDetalle);

module.exports = router;
