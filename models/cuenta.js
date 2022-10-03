module.exports = (sequelize, DataTypes) => {
  const Cuenta = sequelize.define(
    'Cuenta',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'IDCUENTA',
      },
      cuenta: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      saldoInicial: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
        field: 'SALDO_INICIAL',
      },
      saldo: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
        field: 'SALDO',
      },
    },
    {
      timestamps: false,
      tableName: 'CUENTAS',
    },
  );

  Cuenta.associate = (models) => {
    Cuenta.hasMany(models.CuentaDetalle, {
      foreignKey: 'idCuenta',
      as: 'cuentaDetalle',
    });
  };

  return Cuenta;
};
