const {user} = require("../models/user");

let monUser = new user(1, "Lenon", "Jhon", "Jhon@lenon.com", "0796096058");

// Affichage de la page inscription.ejs avec les données définies en paramètres
const registerView = (req, res) => {
    res.render("inscription", {
        user: monUser,
    });
}

module.exports = {
    registerView
}