const express = require('express');

// Import controllers
const { loginView } = require('../controllers/connexion-controller.js');
const { registerView } = require('../controllers/inscription-controller.js')

// Router
const router = express.Router();
router.get('/inscription', registerView);
router.get('/connexion', loginView);

// Default root
router.get('/', (req, res) => {
    res.redirect("inscription");
})

module.exports = router;
