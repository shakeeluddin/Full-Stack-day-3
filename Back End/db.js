const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/gym_db",
    (err) => err ? console.error(err) : console.log("connect to mongo"));

const gymSchema = new mongoose.Schema({

    Day: {
        type: String,
        require: true
    },

    Breakfast: {
        type: String,
        require: true
    },

    Stretches: {
        type: String,
        require: true
    },

    ExerciseOne: {
        type: String,
        require: true
    },

    ExerciseTwo: {
        type: String,
        require: true
    },

    ExerciseThree: {
        type: String,
        require: true
    },

});

const gymModel = mongoose.model("gym", gymSchema);
module.exports = { gymModel }

