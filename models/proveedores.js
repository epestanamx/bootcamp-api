module.exports = (sequelize, DataTypes) => {
  const Proveedor = sequelize.define(
    'Proveedor',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'idproveedor',
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellidos: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'proveedores',
    },
  );

  return Proveedor;
};
