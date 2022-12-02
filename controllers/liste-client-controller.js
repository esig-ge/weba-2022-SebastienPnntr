const { User } = require('../models/user');
const { sequelize } = require('../models/database');

// Affiche la page connexion.ejs avec les données définies en paramètres
const listeClientView = async (req, res) => {
    if (!req.session.user) {
        res.redirect('connexion');
        throw 'Vous n\'etes pas connecté';
    }

    res.render('liste-client', {
        user: req.session.user
    });
}

module.exports = {
    listeClientView
};