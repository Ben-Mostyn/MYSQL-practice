require("dotenv").config();
require("./connection");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

//Model imports
const Genre = require("./models/genre");
const Movie = require("./models/movie");
const Actor = require("./models/actor");

//Util Imports
const Add = require("./Utils/Add");
const List = require("./Utils/List");
const Remove = require("./Utils/Remove");
const Update = require("./Utils/Update");

//Main Function
(async () => {
  await Genre.sync({ alter: true });
  await Movie.sync({ alter: true });
  await Actor.sync({ alter: true });

  //!Add Feature
  if (argv.add) {
    await Add(argv);
  }
  //!List Feature
  else if (argv.list) {
    await List(argv);
  }
  //!Remove Feature
  else if (argv.remove) {
    await Remove(argv);
  }

  //!Update Feature
  else if (argv.update) {
    await Update(argv);
  }
})();
