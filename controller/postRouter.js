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
module.exports=router