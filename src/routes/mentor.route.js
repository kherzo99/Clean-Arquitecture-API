const express = require ("express");
const { create , list } = require ("../usescases/mentor.usecase.js");

const router = express.Router();

//Crear un mentor 
router.post( "/", async (req, res) => {
    try {
        const oneNewMentor = await create(req.body);
        console.log("Este es un nuevo Mentor:", oneNewMentor);
        res.status(201)
        res.json({
            success: true, 
            data: oneNewMentor
        })
    } catch (err) {
        res.status(400)
        res.json({
            success: false,
            message: err.message
        })
    }
});

//Enlistar a los mentores
router.get("/", async (req, res) => {
    try {
        listedMentors = await list();
        res.json({
            success: true,
            data: listedMentors
        })
    } catch (err) {
        res.status(400);
        res.json({
            success: false, 
            message: err.message           
        })

    }
})




module.exports = router; 