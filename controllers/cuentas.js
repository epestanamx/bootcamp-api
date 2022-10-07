/* eslint-disable no-param-reassign */
const {
  Op,
  where,
  fn,
  col,
} = require('sequelize');
const { Cuenta, CuentaDetalle } = require('../models')();

const getCuentas = async (req, res) => {
  const cuentas = await Cuenta.findAll();

  return res.send(cuentas);
};

const getCuentasDetalle = async (req, res) => {
  const { idCuenta } = req.params;
  const {
    fechaInicio,
    fechaFin,
    idUsuario,
    idCategoria,
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
    offset: 0,
    limit: 100,
  });

  return res.send(detalle);
};

const getCuentasResumen = async (req, res) => {
  const {
    fechaInicio,
    fechaFin,
    idUsuario,
    idCategoria,
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

  // Movimientos where fechaHora sea de 2022 usando fn
  const movimientos = await CuentaDetalle.findAll({
    where: {
      ...filtros,
      [Op.and]: where(fn('YEAR', col('FECHA')), 2022),
    },
  });

  // Agrupar los movimientos por mes, separando los cargos y los abonos
  const movimientosAgrupados = movimientos.reduce((acum, mov) => {
    const mes = mov.fechaHora.getMonth();
    const anio = mov.fechaHora.getFullYear();
    const key = `${mes}-${anio}`;

    if (!acum[key]) {
      acum[key] = {
        mes: mes + 1,
        anio,
        cargos: 0,
        abonos: 0,
      };
    }

    if (mov.cargo) {
      acum[key].cargos += mov.cargo;
    } else {
      acum[key].abonos += mov.abono;
    }

    return acum;
  }, {});

  // Convertir el objeto a un arreglo
  const movimientosAgrupadosArreglo = Object.values(movimientosAgrupados);

  // Ordenar el arreglo por mes y año
  movimientosAgrupadosArreglo.sort((a, b) => {
    if (a.anio === b.anio) {
      return a.mes - b.mes;
    }

    return a.anio - b.anio;
  });

  return res.send(movimientosAgrupadosArreglo);
};

module.exports = {
  getCuentas,
  getCuentasDetalle,
  getCuentasResumen,
};
