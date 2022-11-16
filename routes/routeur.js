const express = require('express');

// Import controllers
const { loginView } = require('../controllers/connexion-controller.js');
const { registerView, getRegisterForm } = require('../controllers/inscription-controller.js')

// Router GET
const router = express.Router();
router.get('/inscription', registerView);
router.get('/connexion', loginView);

// Router POST
router.post('/inscription', getRegisterForm)

// Default root
router.get('/', (req, res) => {
    res.redirect("inscription");
})

module.exports = router;
