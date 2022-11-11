const express = require('express');
const { loginView } = require('../controllers/connexion-controller.js');
const { registerView } = require('../controllers/inscription-controller.js')
const router = express.Router();
router.get('/inscription', registerView);
router.get('/connexion', loginView);
module.exports = router;
