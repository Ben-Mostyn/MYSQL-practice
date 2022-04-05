const { DataTypes } = require("sequelize");
const db = require("../connection");
const Genre = require("./genre");
const Actor = require('./actor');

const Movie = db.define("Movie", {
    title: {
	type: DataTypes.STRING,
	allowNull: false,
	
    }
}, {
    // indexes: [{unique: false, fields: ["title"]}]
});

// Movie.belongsTo(Genre);
Movie.hasOne(Actor);

module.exports = Movie;