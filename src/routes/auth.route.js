const express = require("express");
const { login } = require ("../usescases/user.usecase.js")

const router = express.Router()

router.post ("/", async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password);
        res.json({
            success: true, 
            data: token
        })
    } catch (err) {
        res.status(err.status || 500);
        res.json({
            succes: false, 
            message: err.message
        })
    }
});

module.exports = router;
