const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Established a connection to the database")).catch(err => console.log("Unable to connect to DB", err))