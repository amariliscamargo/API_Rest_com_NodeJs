// Importando o express router
const express = require("express");
const routes = express.Router();

// Importando o BookController
const BookController = require("./controllers/BookController");

// Rotas
routes.get("/books", BookController.index);
routes.get("/books/:id", BookController.show);
routes.post("/books", BookController.store);
routes.put("/books/:id", BookController.update);
routes.delete("/books/:id", BookController.destroy);


// Exportando módulo para server.js
module.exports = routes;