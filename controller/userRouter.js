const express = require("express")
const usersModels = require("../models/usersModels")
const router = express.Router()

router.post("/signup", async (req, res) => {
    let data = req.body
    let user = new usersModels(data)
    let result = await user.save()
    res.json({
        status: "success"
    })
})

module.exports=router