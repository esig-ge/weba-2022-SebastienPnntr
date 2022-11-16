import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  idUser: DataTypes.INTEGER,
  nomUser: DataTypes.STRING,
  prenomUser: DataTypes.STRING,
  emailUser: DataTypes.STRING,
  telUser: DataTypes.INTEGER,
  mdpUser: DataTypes.STRING,
  adminUser: DataTypes.BOOLEAN,
});

module.exports = {
    User,
}