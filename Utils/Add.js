const { sequelize } = "sequelize";
require("../connection");
const argv = require("yargs");
const Actor = require("../models/actor");
const Genre = require("../models/genre");
const Movie = require("../models/movie");

// Start of add function
const Add = async (argv) => {
  try {
    const foundGenre = await Genre.findOne({
      where: { category: argv.category },
    });
    if (!foundGenre) {
      try {
        const genre = await Genre.create({ category: argv.category });
        const movie = await Movie.create({
          title: argv.title,
          rating: argv.rating,
          GenreId: genre.id,
        });
        const actor = await movie.createActor({
          name: argv.name,
          MovieId: movie.id,
        });
        console.log("Movie Added");
      } catch (error) {
        console.log(error);
      }
    } else if (foundGenre) {
      const movie = await Movie.create({
        title: argv.title,
        rating: argv.rating,
        GenreId: foundGenre.id,
      });
      const actor = await movie.createActor({
        name: argv.name,
        MovieId: movie.id,
      });
      console.log("Movie Added");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = Add;
