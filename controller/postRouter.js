const express=require("express")
const router=express.Router()
const postmodel=require("../models/postModels")

router.post("/add",async(req,res)=>{
    let data=req.body
    let post=new postmodel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })

})

    router.get("/viewall",async(req,res)=>{
        let result = await postmodel.find().populate("userId","name age phone_no address pincode email password")
        res.json(result)
    })


module.exports=router