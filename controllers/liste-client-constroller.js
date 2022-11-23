const { User } = require('../models/user');
const { sequelize } = require('../models/database');
const session = require('express-session')

// Affiche la page connexion.ejs avec les données définies en paramètres
const listeClientView = async(req, res) => {
    res.render('liste-client.ejs');
}

module.exports = {
    listeClientView
};