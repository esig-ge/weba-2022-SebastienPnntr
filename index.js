const express = require('express');
const session = require('express-session');
const app = express();
app.set('view engine', 'ejs');
const port = process.env.PORT || 3000;

// Sessions
app.use(session({
    secret: "MySecretSession123.",
    cookie: { maxAge: (3600000 * 5) }, // Cookie expire après 5h
    resave: true,
    saveUninitialized: true
}))

// Routes
app.use('/', require('./routes/routeur'));

// Pour les ressources publiques
app.use(express.static(__dirname + '/public'));

// 404
app.get('*', function (req, res) {
    res.status(404).render('404', {
        user: req.session.user
    });
});

// Ecoute sur le port
app.listen(port, () => {
    console.log(`Le serveur est disponible sur le port ${port}`);
})