const { User } = require('../models/user');
const { sequelize } = require('../models/database');

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
        }
        else{
            // Créer un nouvel utilisateur si l'email n'est pas déjà utilisé et renvois sur la page
            let user = await User.create({nomUser: req.body.nom, prenomUser: req.body.prenom, emailUser: req.body.email, telUser: req.body.tel, mdpUser: req.body.mdp, adminUser: false })
            res.render("connexion", {
                newUser: true
            })
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