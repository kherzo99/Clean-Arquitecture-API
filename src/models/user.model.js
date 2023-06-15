const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    name : {
        type: String, 
        minlength: 3, 
        maxlength: 20
    },
    email: {
        type: String, 
        // Regex --> patron
        match: /^.*@.*\..*$/, 
        require: true,
        unique: true
    },
    password: {
        type: String, 
        require: true
    }
});

module.exports = mongoose.model ("User", userSchema, "User")