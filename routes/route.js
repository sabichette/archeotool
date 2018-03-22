const express = require('express');
const router = express.Router();
const PointOfInterest = require('../models/poi');

// Retreive points of interest
router.get('/pis',(req,res,next)=> {
    //res.send('Retrieving the points of interest list');
    PointOfInterest.find(function(err,pois){
        res.json(pois);
    });
});

//Add a new point of Interest
router.post('/pi',(req,res,next) => {
    //TODO
});

//Delete a point of interest
router.delete('/pi/:id',(req,res,next) => {
    //TODO

});

module.exports = router;