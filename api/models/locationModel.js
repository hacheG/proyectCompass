let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let Location = new Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    coordinates: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Location', Location);
