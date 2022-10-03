const { Cuenta, CuentaDetalle } = require('../models')();

const getCuentas = async (req, res) => {
  const cuentas = await Cuenta.findAll();

  return res.send(cuentas);
};

const getCuentasDetalle = async (req, res) => {
  const { idCuenta } = req.params;

  const detalle = await CuentaDetalle.findAll({
    where: {
      idCuenta,
    },
    include: ['cuenta', 'categoria', 'cliente', 'proveedor', 'usuario'],
  });

  return res.send(detalle);
};

module.exports = {
  getCuentas,
  getCuentasDetalle,
};
