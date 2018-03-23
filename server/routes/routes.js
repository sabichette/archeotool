const express = require('express');
const router = express.Router();

const PointOfInterest = require('../models/pointOfInterest_model');

//list all points of interest
router.get('/pis',(req,res,next) => {
   PointOfInterest.find(function(err,pis){
       res.json(pis);
   });
});


// add a point of interest
router.post('/pi',(req,res,next) => {
    let newPi = new PointOfInterest({
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        name: req.body.name
    });

    newPi.save((err,pi)=> {
        if (err) {
            res.json({msg: 'Failed to add point of interest'});
        } else {
            res.json({msg: 'Point of interest added successfully'});
        }
    });
});

// delete a point of interest
router.delete('/pi/:id',(req,res,next) => {
   PointOfInterest.remove({_id: req.params.id}, function(err,result){
       if (err) {
           res.json(err);
       } else {
           res.json(result);
       }
   });
});

module.exports = router;