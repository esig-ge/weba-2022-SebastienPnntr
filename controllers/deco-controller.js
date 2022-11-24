const { User } = require('../models/user');
const { sequelize } = require('../models/database');

// Affiche la page connexion.ejs avec les données définies en paramètres
const deco = async(req, res) => {
    await req.session.destroy();
    res.redirect('accueil');
}

module.exports = {
    deco
};