const express = require('express');
const session = require('express-session');
const app = express();
app.set('view engine', 'ejs');
const port = 3000;

// Sessions
app.use(session({
    secret: "MySecretSession123.",
    cookie: {maxAge: 30000},
    resave: true,
    saveUninitialized: true
}))

// Routes
app.use('/', require('./routes/routeur'));

// Pour les ressources publiques
app.use(express.static(__dirname + '/public'));

// Ecoute sur le port
app.listen(port, () => {
    console.log(`Le serveur est disponible sur le port ${port}`);
})