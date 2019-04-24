// Importando Dependências
const express = require("express");
const mongoose = require("mongoose");

const requireDir = require("require-dir");

// Iniciando o App
const app = express();

// Iniciando o DB
//mongoose.connect("mongodb://localhost:27017/nodeapi",{useNewUrlParser: true});

const url = 'mongodb+srv://highfive:******@clusterapi-yygke.mongodb.net/test?retryWrites=true';
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };
mongoose.connect(url, options);

requireDir("./src/models");


const Book = mongoose.model('Book');
// Primeira Rota
app.get("/", (req,res) => {
    // send() : Envio de dados genérico
    //res.send("Hello World");
    Book.create({
      title: 'Condenada',
      description: 'Menina chata vai para o inferno',
      author: 'Chuck Palahniuk'
    })
});

// Definindo porta localhost
app.listen(3000);

