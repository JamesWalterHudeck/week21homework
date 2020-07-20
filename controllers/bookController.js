const db = require("../models");

// Defining methods for the bookController
module.exports = {
  //searches our database for all the books
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then((dbBook) => res.json(dbBook))
      //Unprocessable Entity response
      .catch((err) => res.status(422).json(err));
  },
  //searches our database for a certain book
  findById: function (req, res) {
    db.Book.findById(req.params.id)
      .then((dbBook) => res.json(dbBook))
      //Unprocessable Entity response
      .catch((err) => res.status(422).json(err));
  },
  //send a books info to be stored in the database
  create: function (req, res) {
    db.Book.create(req.body)
      .then((dbBook) => res.json(dbBook))
      //Unprocessable Entity response
      .catch((err) => res.status(422).json(err));
  },
  //searches our database for a certain book and updates it
  update: function (req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then((dbBook) => res.json(dbBook))
      //Unprocessable Entity response
      .catch((err) => res.status(422).json(err));
  },
  //removes a book from our database
  remove: function (req, res) {
    db.Book.findById(req.params.id)
      .then((dbBook) => dbBook.remove())
      .then((dbBook) => res.json(dbBook))
      //Unprocessable Entity response
      .catch((err) => res.status(422).json(err));
  },
};
