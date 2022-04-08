const { sequelize } = "sequelize";
require("../connection");
const argv = require("yargs");
const Actor = require("../models/actor");
const Genre = require("../models/genre");
const Movie = require("../models/movie");

const Update = async (argv) => {
  try {
    const updatedMovie = await Movie.findOne({
      where: { [argv.key]: argv.title },
    });
    if (updatedMovie) {
      if (argv.movie) {
        const updated = await Movie.update(
          { [argv.key]: argv.updated },
          { where: { [argv.key]: argv.title } }
        );
        const title = argv.title;
        const newTitle = argv.updated;
        console.log(`You have changed ${title} to ${newTitle}`);
      }
    } else if (!updatedMovie) {
      console.log("movie not in the system");
    }
  } catch (error) {}
};

module.exports = Update;
