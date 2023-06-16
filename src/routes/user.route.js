const express = require("express")
const { register , get , list } = require ("../usescases/user.usecase.js");
const auth = require("../middlewares/auth.middleware.js")

const router = express.Router();

router.post ("/", async (req, res) => {
    try {
        const createdUser =  await register(req.body);
        res.status(201);
        res.json({
            success: true, 
            data: createdUser
        })
    } catch (err) {
        res.status(err.status || 500).json({
            success: false, 
            message: err.message
        })
    }
});

router.get("/", async (req, res) => {
    try {
        const users = await list(req.query)
        res.json({
            success: true, 
            data: users
        })
    } catch (err) {
        res.status(err.status || 500).json({
            success: false, 
            message: err.message
            })
        }
    })

router.get("/:id", auth,  async (req, res) => {
    try {
        const user = await get(req.params.id);
        res.status (200).json({
            success:true, 
            data: user
        })
    } catch(err) {
        res.status (err.status || 500 ).json({
            success: false, 
            message: err.message
        })

    }
})

module.exports = router;