const { User } = require('../models/user');
const { sequelize } = require('../models/database');

// Affiche la page connexion.ejs avec les données définies en paramètres
const accueilView = async(req, res) => {
    res.render('accueil');
}

module.exports = {
    accueilView
};