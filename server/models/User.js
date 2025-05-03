const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    passwordHash: String,
    savedItineraries: [String],
    reviews: [String],
    savedPlaces: [String],
});

module.exports = mongoose.model('User', userSchema);