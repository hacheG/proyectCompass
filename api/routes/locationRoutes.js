const express = require('express');
let mongoose = require('mongoose');
const Location = mongoose.model('Location');

const router = express.Router();


router.get('/location', async (req, res) =>{
    Location.find({})
        .then( locations => res.status(200).json({ locations: locations }))
        .catch( err => res.status(401).json({ status: "error", message: err }))
});

router.post('/add', async (req, res) =>{
    let newLocation = new Location({
        name: req.body.name,
        coordinates: req.body.coordinates,
        image: req.body.image
    });
    newLocation.save((err, task) => {
        if (err) { res.status(500).send(err);}
        res.status(201).json(task);
    });
});

module.exports = router;

