// Importando Dependências
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
//mongoose.connect("mongodb://localhost:27017/nodeapi",{useNewUrlParser: true});

const url = 'mongodb+srv://highfive:lambd@3@clusterapi-yygke.mongodb.net/test?retryWrites=true';
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };
mongoose.connect(url, options);

requireDir("./src/models");

app.use("/api", require("./src/routes"));

// Definindo porta localhost
app.listen(3000);

