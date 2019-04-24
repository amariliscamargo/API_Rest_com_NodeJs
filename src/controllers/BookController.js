// Importando o mongoose
const mongoose = require("mongoose");

// Importando o Book.js
const Book = mongoose.model("Book");

// Exportando lógicas de negócio (requisições assíncronas) para routes.js
module.exports = {
    async index(req,res){
        const books = await Book.find();
        // Retornando json
        return res.json(books);
    },

    async show(req, res){
        const book = await Book.findById(req.params.id);
        return res.json(book);
    },

    async store(req, res){
        const book = await Book.create(req.body);
        return res.json(book);
    },

    async update(req, res){
        const book = await Book.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        return res.json(book);
    },

    async destroy(req, res){
        await Book.findOneAndDelete({_id: req.params.id});
        return res.send();    
    }

};