const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//set up our database entries
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true },
});

//creates a collection for all our books
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
