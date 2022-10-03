const Cuenta = require('../models/cuenta');
const CuentaDetalle = require('../models/cuenta-detalle');

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
  });

  return res.send(detalle);
};

module.exports = {
  getCuentas,
  getCuentasDetalle,
};
