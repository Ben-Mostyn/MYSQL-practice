require("dotenv").config();
require("./connection");

const Genre = require("./models/genre");
const Movie = require("./models/movie");
const Actor = require("./models/actor");

// Basically our main() function
(async () => {
    await Genre.sync({alter: true});
    await Movie.sync({alter: true});
    await Actor.sync({alter: true});

    const genre = await Genre.create({category: "Horror"});
    const movie = await Movie.create({title: "Harry Potter", GenreId: genre.id});
    // const actor = await Actor.create({name: "Mick", MovieId: movie.id});
    const actor = await movie.createActor({
        name: "Harry",
        MovieId: movie.id
    });

    for (const genre of await Genre.findAll({include: Movie})) {
	const movie = await genre.getMovie();
	// const al2 = await Movie.findOne({include: Genre, where: {title: al1.title}});
	// const genreName = await al2.getGenre();
        const actor = await movie.getActor();
	// console.log(`${actor.name} by ${genre.category} on ${al2.title}`);
    console.log(actor, movie, genre);
    }
})();