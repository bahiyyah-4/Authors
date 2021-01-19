const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/authors_db`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connection to database: successful"))
    .catch(err => console.log("Connection failed", err));