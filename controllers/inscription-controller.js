// Affichage de la page inscription.ejs avec les données définies en paramètres
const registerView = (req, res) => {
    res.render("inscription", {
        user: "",
    });
}

const getRegisterForm = (req, res) => {
    console.log("test"); // Quand il recoit le form
    res.render("inscription", {
        user: "",
    });
}

module.exports = {
    registerView,
    getRegisterForm
}