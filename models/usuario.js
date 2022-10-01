const { DataTypes } = require('sequelize');
const sequelize = require('.')();

const Usuario = sequelize.define(
  'Usuario',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'idusuario',
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING,
    },
    correo: {
      unique: true,
      type: DataTypes.STRING,
    },
    contrasenia: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: 'usuarios',
  },
);

module.exports = Usuario;
