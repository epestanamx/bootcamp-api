const { DataTypes } = require('sequelize');
const sequelize = require('.')();

const Categoria = sequelize.define(
  'Categoria',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'IDCATEGORIA',
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'CATEGORIAS',
  },
);

module.exports = Categoria;
