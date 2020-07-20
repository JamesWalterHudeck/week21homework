const axios = require("axios");
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function (req, res) {
    const { query: params } = req;
    //api request
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params,
      })
      //using all the results only fetch certain data
      .then((results) =>
        results.data.items.filter(
          (result) =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      //push the data to our front end pages
      .then((apiBooks) =>
        db.Book.find().then((dbBooks) =>
          apiBooks.filter((apiBook) =>
            dbBooks.every((dbBook) => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      .then((books) => res.json(books))
      //Unprocessable Entity response
      .catch((err) => res.status(422).json(err));
  },
};
