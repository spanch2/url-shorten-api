const mongoose = require('mongoose');

var Schema = mongoose.Schema;

// uid will be used for retrieving and displaying urls for specific users once authentication is implemented
// lastUsed will be used to remove urls that have not been used in a long time

var UrlSchema = new Schema({
    urlCode: {
        type: String,
        required: true,
    },
    uid: {
        type: String,
        required: true,
    },
    longUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
    },
    lastUsed: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

module.exports = mongoose.model('UrlModel', UrlSchema)