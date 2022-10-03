module.exports = (sequelize, DataTypes) => {
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

  Categoria.associate = (models) => {
    Categoria.hasMany(models.CuentaDetalle, {
      foreignKey: 'idCategoria',
      as: 'cuentaDetalle',
    });
  };

  return Categoria;
};
