const { sequelize } = "sequelize";
require("../connection");
const argv = require("yargs");
const Actor = require("../models/actor");
const Genre = require("../models/genre");
const Movie = require("../models/movie");

const Remove = async (argv) => {
  if (argv.movie) {
    const remove = await Movie.destroy({
      where: { title: argv.title },
    });

    const actor = await Actor.destroy({
      where: { name: argv.name },
    });

    console.log(remove, actor);
  }
};

module.exports = Remove;
