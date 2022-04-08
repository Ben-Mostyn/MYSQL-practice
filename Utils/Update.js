const { sequelize } = "sequelize";
require("../connection");
const argv = require("yargs");
const Actor = require("../models/actor");
const Genre = require("../models/genre");
const Movie = require("../models/movie");

const Update = async (argv) => {
  if (argv.movie) {
    const updated = await Movie.update(
      { title: argv.updated },
      {
        where: {
          title: argv.title,
        },
      }
    );

    console.log(updated);
  }
};

module.exports = Update;
