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
        await sequelize.sync({ force: true });
        const user = User.create({ idUser: 1, nomUser: "Ette", prenomUser: "Jane", emailUser: "Jane.ette@gmail.com", telUser: "0796096058", mdpUser: "MonMdp", adminUser: false })
    })();

    res.render("inscription", {
        submit: true,
        user: user
    })
}

module.exports = {
    registerView,
    getRegisterForm
}