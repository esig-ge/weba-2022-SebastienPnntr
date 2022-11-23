const { User } = require('../models/user');
const { sequelize } = require('../models/database');
const bcrypt = require('bcryptjs');

// Affichage de la page inscription.ejs avec les données définies en paramètres
const registerView = async(req, res) => {
    res.render("inscription");
}

const getRegisterForm = async(req, res) => {
    try{
        // Genère la table si elle n'existe pas encore
        await sequelize.sync({});

        // Récupère les utilisateurs qui ont le meme email
        let userWithSameEmail = await User.findOne({where: {emailUser: req.body.email}})

        if(userWithSameEmail){
            // Si l'utilisateur a envoyé un email déjà utilisé par un autre compte, renvois sur la page avec une erreur
            res.render("inscription", {
                error: "L'email est déjà utilisé par un autre compte!"
            })
        } else if(req.body.mdp != req.body.mdpConfirm){
                // Si l'utilisateur n'a pas bien confirmé son mot de passe
            res.render("inscription", {
                error: "Les mots de passe ne correspondent pas"
            })
        }
        else{
            // Cryptage du mot de passe
            // Generation du grain de sel
            let salt = await bcrypt.genSalt(10)
            // Cryptage du mot de passe
            let hash = await bcrypt.hash(req.body.mdp, salt);

            // Créer un nouvel utilisateur si l'email n'est pas déjà utilisé et renvois sur la page
            let user = await User.create({nomUser: req.body.nom, prenomUser: req.body.prenom, emailUser: req.body.email, telUser: req.body.tel, mdpUser: hash, adminUser: false })
            res.redirect('/connexion/?new=true');
        }
    }catch{
        res.render("inscription", {
            error: "Une erreur est survenue."
        })
    }
}

module.exports = {
    registerView,
    getRegisterForm
}