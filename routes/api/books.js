const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
router
  .route("/")
  //get request to our google api
  .get(bookController.findAll)
  //post request for our google api results
  .post(bookController.create);

// Matches with "/api/books/:id"
router
  //uses the books id to display to page
  .route("/:id")
  //get request to our data base to find a certain book
  .get(bookController.findById)
  //put request to update a book
  .put(bookController.update)
  //delete request to remove a book from our database
  .delete(bookController.remove);

module.exports = router;
