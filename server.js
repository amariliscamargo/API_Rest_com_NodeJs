// Importando express
const express = require("express");
// Instanciando a função do express
app = express();

// Rota
app.get("/", (req,res) => {
 // send() : Envio de dados genérico
   res.send("Hello World");
});

// Definindo porta localhost
app.listen(3000);