const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        key: "random222222222",
        title: "test2",
        subtitle: "test2",
        authors: "test2",
        description: "test2",
        image: "test2",
        link: "test2"
    },
    {
        key: "random1111111111",
        title: "test1",
        subtitle: "test1",
        authors: "test1",
        description: "test1",
        image: "test1",
        link: "test1"
    },
    {
        key: "random333333333",
        title: "test3",
        subtitle: "test3",
        authors: "test3",
        description: "test3",
        image: "test3",
        link: "test3"
    }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
