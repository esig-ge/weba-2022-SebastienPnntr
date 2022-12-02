const { User } = require('../models/user');
const { sequelize } = require('../models/database');

// Affiche la page connexion.ejs avec les données définies en paramètres
const listeClientView = async (req, res) => {
    if (req.session.user) {
        res.render('liste-client', {
            user: req.session.user
        });
    } else {
        res.redirect('connexion');
    }
}

module.exports = {
    listeClientView
};