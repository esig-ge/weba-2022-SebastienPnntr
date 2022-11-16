const {user} = require("../models/user");
const {body, validationResult} = require("express-validator");

let monUser = new user(1, "Lenon", "Jhon", "Jhon@lenon.com", "0796096058");

// Affichage de la page inscription.ejs avec les données définies en paramètres
const registerView = (req, res) => {
    res.render("inscription", {
        user: monUser,
    });
}

const getRegisterForm = (req, res) => {
    console.log("test"); // Quand il recoit le form
    res.render("inscription", {
        user: monUser,
    });
}

module.exports = {
    registerView,
    getRegisterForm
}