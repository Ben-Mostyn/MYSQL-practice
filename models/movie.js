const { DataTypes, INTEGER } = require("sequelize");
const db = require("../connection");
const Genre = require("./genre");
const Actor = require("./actor");

const Movie = db.define(
  "Movie",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    rating: { type: INTEGER },
  },
  {
    indexes: [{ unique: false, fields: ["title"] }],
  }
);

// Movie.belongsTo(Genre);
Movie.hasMany(Actor);

module.exports = Movie;
