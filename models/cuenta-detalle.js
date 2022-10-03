module.exports = (sequelize, DataTypes) => {
  const CuentaDetalle = sequelize.define(
    'CuentaDetalle',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'IDCUENTADETALLE',
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cargo: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
      },
      abono: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
      },
      saldo: {
        type: DataTypes.DECIMAL,
      },
      fechaHora: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'FECHA',
      },
      idCuenta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'IDCUENTA',
      },
      idCategoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'IDCATEGORIA',
      },
      idCliente: {
        type: DataTypes.INTEGER,
        field: 'IDCLIENTE',
      },
      idProveedor: {
        type: DataTypes.INTEGER,
        field: 'IDPROVEEDOR',
      },
      idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'IDUSUARIO',
      },
    },
    {
      timestamps: false,
      tableName: 'CUENTAS_DETALLE',
    },
  );

  CuentaDetalle.associate = (models) => {
    CuentaDetalle.belongsTo(models.Cuenta, {
      foreignKey: 'idCuenta',
      as: 'cuenta',
    });

    CuentaDetalle.belongsTo(models.Categoria, {
      foreignKey: 'idCategoria',
      as: 'categoria',
    });

    CuentaDetalle.belongsTo(models.Cliente, {
      foreignKey: 'idCliente',
      as: 'cliente',
    });

    CuentaDetalle.belongsTo(models.Proveedor, {
      foreignKey: 'idProveedor',
      as: 'proveedor',
    });

    CuentaDetalle.belongsTo(models.Usuario, {
      foreignKey: 'idUsuario',
      as: 'usuario',
    });
  };

  return CuentaDetalle;
};
