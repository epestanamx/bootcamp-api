/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const path = require('path');
const Sequelize = require('sequelize');
const { readdirSync } = require('fs');

let sequelize = null;
const db = {};
const basename = path.basename(__filename);

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

    readdirSync(__dirname)
      .filter(
        (file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
      )
      .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
      });

    Object.keys(db).forEach((modelName) => {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
  }

  return db;
};
