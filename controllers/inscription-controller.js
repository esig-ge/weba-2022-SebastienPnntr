// Pour la page d'inscription
const registerView = (req, res) => {
    res.render("inscription", {
        test: "c'est un test"
    });
}

module.exports = {
    registerView
}