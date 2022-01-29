const mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1:27017';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

module.exports = db;