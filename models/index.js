const { Sequelize } = require('sequelize');

let sequelize;

module.exports = () => {
  if (!sequelize) {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASS,
      {
        host: process.env.DB_HOST,
        dialect: 'mssql',
      },
    );
  }

  return sequelize;
};
