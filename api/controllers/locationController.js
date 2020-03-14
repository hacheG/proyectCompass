let mongoose = require("mongoose");
let Location = mongoose.model("Location");

exports.allLocations = (req,res) => {
    Location.find({})
        .then( locations => res.status(200).json({ locations: locations }))
        .catch( err => res.status(401).json({ status: "error", message: err }))
};
