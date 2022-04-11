const mongoose = require("mongoose");

const access = "convidado";
const dataBase = "search-zip-code";

mongoose.connect(
  `mongodb+srv://${access}:${access}@cluster0.czz1b.mongodb.net/${dataBase}?retryWrites=true&w=majority`
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
