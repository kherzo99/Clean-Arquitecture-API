const mongoose = require("mongoose");


const mentorSchema = new mongoose.Schema ({
    name : {
        type : String, 
        minlength: 3, 
        maxlength: 15,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    module : {
        type : String
    },
    generations : [{
        name: String,
    }]
});

module.exports = mongoose.model("mentors", mentorSchema, "Mentors" )