const { Op } = require('sequelize');
const { Cuenta, CuentaDetalle } = require('../models')();

const getCuentas = async (req, res) => {
  const cuentas = await Cuenta.findAll();

  return res.send(cuentas);
};

const getCuentasDetalle = async (req, res) => {
  const { idCuenta } = req.params;
  const {
    fechaInicio, fechaFin, idUsuario, idCategoria,
  } = req.query;

  const filtros = {};

  if (fechaInicio && fechaFin) {
    filtros.fecha = {
      [Op.between]: [fechaInicio, fechaFin],
    };
  }

  if (idUsuario) {
    filtros.idUsuario = idUsuario;
  }

  if (idCategoria) {
    filtros.idCategoria = idCategoria;
  }

  const detalle = await CuentaDetalle.findAll({
    where: {
      idCuenta,
      ...filtros,
    },
    include: ['cuenta', 'categoria', 'cliente', 'proveedor', 'usuario'],
  });

  return res.send(detalle);
};

module.exports = {
  getCuentas,
  getCuentasDetalle,
};
