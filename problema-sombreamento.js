const express = require('express');

const app = express();

app.get('/hello', (req, res) => { res.send('Olá mundo!') });
app.get('/hello', (req, res) => { res.send('Olá pessoal!') });

app.listen(3000);
