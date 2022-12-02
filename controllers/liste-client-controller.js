const { User } = require('../models/user');
const { sequelize } = require('../models/database');

// Affiche la page connexion.ejs avec les données définies en paramètres
const listeClientView = async (req, res) => {
    if (!req.session.user) {
        res.redirect('connexion');
        throw 'Vous n\'etes pas connecté';
    }

    let userList = await User.findAll();

    res.render('liste-client', {
        user: req.session.user,
        userList: userList
    });
}

module.exports = {
    listeClientView
};