const { User } = require('../models/user');
const { sequelize } = require('../models/database');
const bcrypt = require('bcryptjs');

// Affiche la page connexion.ejs avec les données définies en paramètres
const loginView = async(req, res) => {
    var newUser = req.query.new;
    if(newUser){
        res.render("connexion", {
            newUser: true
        });
    }else{
        res.render("connexion");
    }
}

const getLoginForm = async(req, res) => {
    try{
        // Genère la table si elle n'existe pas encore
        await sequelize.sync({});

        // Cherche l'utilisateur
        let user = await User.findOne({where: {emailUser: req.body.email}});

        if(user){
            // Si l'utilisateur est trouvé
            let mdpValid = await bcrypt.compare(req.body.mdp, user.dataValues.mdpUser);
            if(mdpValid){
                // Si le mot de passe est le bon
                
            }else{
                // Si le mot de passe n'est pas le bon
                res.render("connexion", {
                    error: "Email ou mot de passe incorrecte!"
                })
            }

        }else{
            // Si l'utilisateur n'est pas trouvé
            res.render("connexion", {
                error: "Email ou mot de passe incorrecte!"
            })
        }
    }catch{
        console.log("aaa");
    }
}

module.exports = {
    loginView,
    getLoginForm
};