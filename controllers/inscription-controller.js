const { User } = require('../models/user');
const { sequelize } = require('../models/database');

// Affichage de la page inscription.ejs avec les données définies en paramètres
const registerView = (req, res) => {
    res.render("inscription", {
        user: "",
    });
}

const getRegisterForm = (req, res) => {
    console.log("Un form a été recu");

    (async () => {
        try{
            // Genère la table si elle n'existe pas encore
            await sequelize.sync({});
            // Créer un nouvel utilisateur
            let user = User.create({nomUser: req.body.nom, prenomUser: req.body.prenom, emailUser: req.body.email, telUser: req.body.tel, mdpUser: req.body.mdp, adminUser: false })
            res.render("inscription", {
                submit: true,
                user: user
            })
        }catch{
            res.render("inscription", {
                submit: true,
                error: true
            })
        }
    })();
}

module.exports = {
    registerView,
    getRegisterForm
}