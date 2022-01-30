import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// uid will be used for retrieving and displaying urls for specific users once authentication is implemented
// lastUsed will be used to remove urls that have not been used in a long time

export const UrlSchema = new Schema({
    alias: {
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
        default: Date.now(),
    }
})

export const Url = mongoose.model('Url', UrlSchema);