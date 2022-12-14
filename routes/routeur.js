const express = require('express');
const bodyParser = require('body-parser');

// Body Parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Import controllers
const { loginView, getLoginForm} = require('../controllers/connexion-controller.js');
const { registerView, getRegisterForm } = require('../controllers/inscription-controller.js')
const { listeClientView } = require('../controllers/liste-client-controller')
const { accueilView } = require('../controllers/accueil-controller')
const { deco } = require('../controllers/deco-controller')
const { getInfoUser } = require('../controllers/ajax/get-info-user-controller');

// Router GET
const router = express.Router();
router.get('/inscription', registerView);
router.get('/connexion', loginView);
router.get('/liste-client', listeClientView);
router.get('/accueil', accueilView);
router.get('/deco', deco);
router.get('/getInfoUser', getInfoUser);

// Router POST
router.post('/inscription', urlencodedParser, getRegisterForm);
router.post('/connexion', urlencodedParser, getLoginForm);

// Default root
router.get('/', (req, res) => {
    res.redirect("accueil");
})

module.exports = router;
