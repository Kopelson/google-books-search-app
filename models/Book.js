const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    key: {
        type: String,
        trim: true,
    },
    title: {
        type: String,
        trim: true,

    },
    subtitle: {
        type: String,
        trim: true,

    },
    authors: [String],
    description: {
        type: String,
        trim: true,

    },
    image: {
        type: String,
        trim: true,
    },
    link: {
        type: String,
        trim: true
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
