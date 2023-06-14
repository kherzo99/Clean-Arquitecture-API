const Mentor = require("../models/mentor.model.js");

//Crear un mentor (post).
const create = (data) => {
    const newMentor = Mentor.create(data);
    return newMentor
};

//Enlistar mentores
const list = () => {
    const mentors = Mentor.find();
    return mentors;
}

module.exports = { create , list } 