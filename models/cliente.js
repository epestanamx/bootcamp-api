module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define(
    'Cliente',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'idcliente',
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
      tableName: 'clientes',
    },
  );

  return Cliente;
};
