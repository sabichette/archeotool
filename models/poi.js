const mongoose =require('mongoose');

const poiSchema = mongoose.Schema({
    latitude: {
        type: Number,
        required : true
    },
    longitude: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const Poi = module.exports = mongoose.model('poi',poiSchema);