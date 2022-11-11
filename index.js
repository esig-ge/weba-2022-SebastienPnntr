const express = require('express')
const app = express()
app.set('view engine', 'ejs');
const port = 3000

// Routes
app.use('/', require('./routes/routeur'));

// Ecoute sur le port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})