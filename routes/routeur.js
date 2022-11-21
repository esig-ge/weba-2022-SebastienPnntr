const express = require('express');
const bodyParser = require('body-parser');

// Body Parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Import controllers
const { loginView } = require('../controllers/connexion-controller.js');
const { registerView, getRegisterForm } = require('../controllers/inscription-controller.js')

// Router GET
const router = express.Router();
router.get('/inscription', registerView);
router.get('/connexion', loginView);

// Router POST
router.post('/inscription', urlencodedParser, getRegisterForm)

// Default root
router.get('/', (req, res) => {
    res.redirect("inscription");
})

module.exports = router;
