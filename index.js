"use strict"
const express = require("express");

const app = express();

let i = 0;
let q = [];

app.get('/hello', (req, res) => res.send(
  (_ => {
    let res = "wow";
    for(let x = 0; x < i; x++) {
      res += "<br>wow";
  }
    i++;
    return res;
})()
));

app.get('/greet', (req, res) => res.send(

  (_ => {

    if(!("nome" in req.query)) {
      return "ta errado";
    }

    q.push(req.query.nome);
    let res = "";
    for(let s in q) {
      res += `Hi ${q[s]}<br>`;
  }
    i++;
    return res;
})()


));

app.get('/queryparams', (req, res) => {
  res.send(req.query);
})

app.get('/pathparams/:nome/:time', (req, res) => {
  res.send(req.params + "<br>" + `Meu nome é ${req.params.nome} e eu sou ${req.params.time} desde sempre.`);
})

app.get('/optional(/:maybe)?', (req, res) => {
  if(req.params.maybe)
    res.send('Call me ' + req.params.maybe);
  else
    res.send('I just met you');
});

app.listen(3000);
