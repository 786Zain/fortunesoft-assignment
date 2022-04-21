// PACKAGES
const express = require("express");

// MODELS & HELPERS
const movieController = require("../controllers/movie-controller");
const HttpError = require("../models/error-model/runtime-error");
const auth = require("../middleware/auth-middleware");
const router = express.Router();

// GET API GATEWAYS

// View Check
router.get("/start", (req, res) => {
  res.render("start");
});

// Root Check
router.get("/", movieController.welcome);




/*
* @swagger
*/


// get movies by genres
router.get("/getMovies",auth,  (req, res, next) => {
  movieController
    .getMovies(req, next)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      const error = new HttpError(err.message, 406);
      return next(error);
    });
});

module.exports = router;