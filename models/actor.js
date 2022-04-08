const { DataTypes } = require("sequelize");
const db = require("../connection");
const Movie = require("./movie");

const Actor = db.define(
  "Actor",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // indexes: [{unique: false, fields: ["name"]}]
  }
);

// Actor.belongsTo(Movie);
// Actor.hasMany(Movie);

module.exports = Actor;
