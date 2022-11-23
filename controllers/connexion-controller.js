const { User } = require('../models/user');
const sequelize = require('../models/database');
const bcrypt = require('bcryptjs');

// Affiche la page connexion.ejs avec les données définies en paramètres
const loginView = async(req, res) => {

    res.render("connexion", {
    });
}

const getLoginForm = async(req, res) => {
    try{

    }catch{

    }
}

module.exports = {
    loginView
};