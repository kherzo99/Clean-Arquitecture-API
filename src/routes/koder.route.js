const express = require ("express");
const { list , get , create , update , remove } = require ("../usescases/koder.usecase.js")

//Router
// es un conjunto de rutas en una aplicacion

const router = express.Router();

/*
RUTAS 
- Aqui vamos a leer el request y response
*/ 

//Enlistar koders
router.get("/", async (req, res) => {
    try {
        const koders = await list();
        console.log("koders", koders);
        res.json({
            success: true,
            data: koders
        })
    } catch (err) {
        res.status(400);
        res.json({
            success: false, 
            message: err.message
        })
    }
});

// Obtener koder por iD. 
//path params -> id -> /koders/:id
router.get ("/:id", async (req, res) => {
    try {
        const oneKoder = await get(req.params.id);
        if (!oneKoder) {
            const error = new Error ("Koder not found");
            error.status = 404;
            throw error;
        }
        res.json({
            success: true, 
            data: oneKoder
        })
    } catch (err) {
        console.log("Error en el catch", err);
        res.status( err.status || 500 );
        res.json({
            success:false,
            message: err.message
        })
    }
});

//Crear un nuevo Koder 
router.post ("/", async (req, res) => {
    try {
        const oneNewKoder = await create(req.body);
        console.log("Este es el nuevo koder:", oneNewKoder);
        if (!oneNewKoder) {
            const error = new Error ("Koder not found");
            error.status = 404;
            throw error;
        }
        res.status(201);
        res.json ({
            success: true,
            data: oneNewKoder
        })
        } catch (err) {
            res.status( err.status || 500 );
            res.json({
            success:false,
            message: err.message
        })
    }
})

// Actualizar un Koder (Patch)
router.patch("/:id/", async (req, res) => {
    try {
        const updatedKoder = await update(req.params.id, req.body);
        res.status(200);
        res.json ({
            success: true,
            data: updatedKoder
        })
    } catch (err) {
        res.status(404);
            res.json({
            success:false,
            message: err.message
    })
}})

//Borrar un Koder 
router.delete("/:id/", async (req, res) => {
    try {
        const deletedKoder = await remove(req.params.id);
        res.status(200);
        res.json({
            success: true, 
            message: deletedKoder
        })
    } catch (err) {
        res.status(404);
            res.json({
            success:false,
            message: err.message
    })}
});






module.exports = router; 

