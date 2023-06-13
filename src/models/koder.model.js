const mongoose = require ("mongoose"); 
/* const { string } = require("yargs"); */ 

/*
1 - Schema de mongoose. 
2 - Modelo - Lo que vamos a exportar. 
*/

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 15,
        required: true
      },
      module: {
        type: String
      },
      generation: {
        type: String
      },
      age: {
        type: Number,
        required: true,
        min: 18,
        max: 100
      },
      sex: {
        type: String,
        enum: ["f", "m", "o"]
      }
}); 

// Exportamos modelo
module.exports = mongoose.model("koders", koderSchema, "Koders");

