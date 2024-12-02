const express = require('express');
const post = require('./data');
const app = express();
const port = 3000;

app.use(express.static("public"));

// Rotta di default
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

// Rotta "/bacheca"
app.get(`/bacheca`, (req, res) => {
    res.json({
        posts: post.data,
        length: post.data.length,
    })

})

// Avvia il server e logga che è in ascolto
app.listen(port, () => {
    console.log('Server in ascolto');
})