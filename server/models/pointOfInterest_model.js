const mongoose = require('mongoose');

const piSchema = mongoose.Schema({
    latitude: {
        type: Number, 
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('pointOfInterest',piSchema);