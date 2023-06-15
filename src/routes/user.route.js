const express = require("express")
const { register } = require ("../usescases/user.usecase.js")

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

module.exports = router;