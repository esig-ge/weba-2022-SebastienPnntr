const { User } = require('../../models/user');
const { sequelize } = require('../../models/database');

// Affiche la page connexion.ejs avec les données définies en paramètres
const getInfoUser = async(req, res) => {
    try{
        // Genère la table si elle n'existe pas encore
        await sequelize.sync({});

        // Cherche l'utilisateur
        let user = await User.findOne({where: {idUser: req.query.idUser}});

        res.json(user);
    }
    catch(error){
        res.send("error");
    }
}

module.exports = {
    getInfoUser
};