// Affichage de la page inscription.ejs avec les données définies en paramètres
const registerView = (req, res) => {
    res.render("inscription", {
        test: "c'est un test"
    });
}

module.exports = {
    registerView
}