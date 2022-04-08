const { sequelize } = ('sequelize');
require("../connection");
const argv = require('yargs');
const Actor = require('../models/actor');
const Genre = require('../models/genre');
const Movie = require('../models/movie');

const Remove = async(argv) => {
    if(argv.movie){
        const remove = await Movie.destroy({
        where: {
          title: argv.title
        },
    });

    const actor = await Actor.destroy({
        where: {
            name: argv.name
        }
    })
    const genre = await Genre.destroy({
        where: {
            category: argv.category
        }
    })
    console.log(remove, actor, genre);

    }

    // else if(argv.actor){
    //     const remove = await Actor.destroy({
    //         where: {
    //             name: argv.name
    //         }
    //     })
    //     console.log(remove);
    // }

    // else if(argv.genre){
    //     const remove = await Genre.destroy({
    //         where: {
    //             category: argv.category
    //         }
    //     })
    //     console.log(remove);
    // }
}



module.exports = Remove;
