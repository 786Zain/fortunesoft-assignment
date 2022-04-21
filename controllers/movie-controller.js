// PACKAGES
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// MODELS
const movieModels = require("../models/movies-model/movie-models");

// HELPERS

// MIDDLEWARES
const HttpError = require("../models/error-model/runtime-error");

// check server updated
const welcome = async (req, res) => {
  res.status(200).json({
    message: "Application Running, Server Ready",
    "Last Codes Updated: ": process.env.SERVERUPDATES,
  });
};



// Search getMovies by generes
const getMovies = async (req, next) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await movieModels.Movie.aggregate([
        {
          '$project': {
            'director': '$director', 
            'imdb_rating': '$imdb_rating', 
            'length': '$length', 
            'poster': '$poster', 
            'title': '$title', 
            'genres': '$genres'
          }
        }, {   // This code can be reduced using groupLookup
          // But I don't have genres List
          '$facet': {
            'Action': [
              {
                '$match': {
                  'genres': {
                    '$elemMatch': {
                      '$eq': 'Action'
                    }
                  }
                }
              }
            ], 
            'Drama': [
              {
                '$match': {
                  'genres': {
                    '$elemMatch': {
                      '$eq': 'Drama'
                    }
                  }
                }
              }
            ], 
            'Biography': [
              {
                '$match': {
                  'genres': {
                    '$elemMatch': {
                      '$eq': 'Biography'
                    }
                  }
                }
              }
            ], 
            'History': [
              {
                '$match': {
                  'genres': {
                    '$elemMatch': {
                      '$eq': 'History'
                    }
                  }
                }
              }
            ], 
            'Crime': [
              {
                '$match': {
                  'genres': {
                    '$elemMatch': {
                      '$eq': 'Crime'
                    }
                  }
                }
              }
            ], 
            'Animation': [
              {
                '$match': {
                  'genres': {
                    '$elemMatch': {
                      '$eq': 'Animation'
                    }
                  }
                }
              }
            ], 
            'Adventure': [
              {
                '$match': {
                  'genres': {
                    '$elemMatch': {
                      '$eq': 'Adventure'
                    }
                  }
                }
              }
            ], 
            'Family': [
              {
                '$match': {
                  'genres': {
                    '$elemMatch': {
                      '$eq': 'Family'
                    }
                  }
                }
              }
            ]
          }
        }, {
          '$replaceRoot': {
            'newRoot': {
              'result': [
                {
                  'genres': 'Action', 
                  'movies': '$Action'
                }, {
                  'category': 'Drama', 
                  'movies': '$Drama'
                }, {
                  'genres': 'Biography', 
                  'movies': '$Biography'
                }, {
                  'genres': 'History', 
                  'movies': '$History'
                }, {
                  'genres': 'Crime', 
                  'movies': '$Crime'
                }, {
                  'genres': 'Animation', 
                  'movies': '$Animation'
                }, {
                  'genres': 'Adventure', 
                  'movies': '$Adventure'
                }, {
                  'genres': 'Family', 
                  'movies': '$Family'
                }
              ]
            }
          }
        },
        // {
        //   $unset:'$result.movies.genres'
        // }
      ]);
      resolve({ message: "Got Entries", data: data[0].result });
    } catch (err) {
      const error = new HttpError(err.message, 500);
      return next(error);
    }
  });
};


const obj = {
  welcome,
  getMovies
};
module.exports = obj;