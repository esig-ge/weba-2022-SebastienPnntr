const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('./database');

class User extends Model { }

User.init({
    idUser: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nomUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenomUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mdpUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adminUser: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'User'
});

module.exports = {
    User
}