const mongoose = require('mongoose');

const JokeSchema = mongoose.Schema({
    setUp: {type: String},
    punchLine: {type: String}

});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;