const JokeController = require("../controllers/jokes.controller");



module.exports = app =>{
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:_id", JokeController.getOneJoke);
    // app.get("api/jokes/random", JokeController.findAllJokes);
    app.post("/api/jokes/new", JokeController.createJoke);
    app.patch("/api/jokes/update/:_id", JokeController.updateJoke);
    app.delete("/api/jokes/:_id", JokeController.deleteOne);


}