const Joke = require('../models/jokes.models');


// _______________________________________________________________________________GET ALL JOKES
module.exports.findAllJokes = (req, res) =>{
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes}))
        .catch(err => res.json({ message: "Something went wrong finding all Jokes", error: err }));
}

// _______________________________________________________________________________GET A SINGLE JOKE
module.exports.getOneJoke = (req, res) =>{
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: "Something went wrong getting a Joke", error: err }));
}

// ________________________________________________________________________________CREATE A JOKE
module.exports.createJoke = (req, res) =>{

    Joke.create(req.body)
    .then(newJoke => res.json( newJoke))
    .catch(err => res.json({ message: "Error creating New Joke", error: err }));
}

// __________________________________________________________________________________UPDATE A JOKE
module.exports.updateJoke = (req, res) =>{
    Joke.findOneAndUpdate( {_id: req.params.id},
        req.body,
        { new: true, runValidators: true }
        ).then(updateJoke => res.json({ joke: updateJoke }))
        .catch(err => res.json({ message: "Something went wrong updating a joke", error: err}))
}

// __________________________________________________________________________________DELETE A JOKE
module.exports.deleteOne = (req, res) => {
    Joke.deleteOne({_id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong with delete Method", error: err}));
}