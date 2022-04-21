const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// movieSchema
const movieSchema = new Schema({
  backdrop:{
    type:String
  },
  cast:{
    type: Array,
    default: []
  },
  overview:{
    type:String
  },
  slug:{
    type:String
  },
  classification:{
    type:String
  },
  released_on:{ type: Date},
 director: {
    type: String,
    maxlength: 35,
  },
  imdb_rating: {
    type: Number,
    maxlength: 4,
  },
  length: {
    type: String,
  },
  id: {
    type: String,
  },
  poster: {
    type: String,
  },
  title: {
    type: String,
  },
  genresType:{
    type: Array,
    default: []
  },
  createdAt: { type: Date, required: true, default: Date.now },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = {
  Movie: Movie,
};
