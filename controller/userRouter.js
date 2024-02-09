const express = require("express")
const usersModels = require("../models/usersModels")
const router = express.Router()

const bcrypt = require("bcryptjs")

hashPaswordGenerator =async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup", async(req,res)=>{
    let {data} = {"data":req.body}
      let password =data.password
        hashPaswordGenerator(password).then(
            (hashedPassword)=>{
                console.log(hashedPassword)
                data.password=hashedPassword
                console.log(data)
                
                 let user =new usersModels(data)
                let result =user.save()
                
                res.json({status:"success"})
            }
        )

   
})

module.exports =router