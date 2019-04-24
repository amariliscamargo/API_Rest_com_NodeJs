const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        defaut: Date.now
    },
});
BookSchema.plugin(mongoosePaginate);

mongoose.model('Book', BookSchema);

