const { sequelize } = "sequelize";
require("../connection");
const argv = require("yargs");
const Actor = require("../models/actor");
const Genre = require("../models/genre");
const Movie = require("../models/movie");

const List = async (argv) => {
  try {
    if (argv.listAll) {
      for (const genre of await Genre.findAll({ include: Movie })) {
        let actors;
        const movies = await genre.getMovies();
        const stringyMovies = JSON.stringify(movies, null, 4);
        for (const movie of movies) {
          actors = await movie.getActors();
        }

        for (let i = 0; i < movies.length; i++) {
          for (let j = 0; j < actors.length; j++) {
            console.log(
              `the movie is ${movies[i].title}, the rating is ${movies[i].rating} the actor is ${actors[j].name}`
            );
          }
        }
      }
    } else if (argv.actor) {
      const actors = await Actor.findAll({});
      for (actor of actors) {
        console.log(actor.name);
      }
    } else if (argv.movie) {
      const movies = await Movie.findAll({});
      for (movie of movies) {
        console.log(`Title: ${movie.title}`);
      }
      console.log("These are all the titles");
    } else if (argv.genre) {
      const genres = await Genre.findAll({});
      for (genre of genres) {
        const movies = await genre.getMovies();
        for (movie of movies) {
          const newMovie = JSON.stringify(movie, null, 2);
          console.log(
            ` The category is ${genre.category} and the film is ${movie.title}`
          );
        }
      }
    }
  } catch (error) {}
};

// for (const genre of await Genre.findAll({include: Movie})) {
// const movie = await genre.getMovie();
//     const actor = await movie.getActor();

// }

module.exports = List;
