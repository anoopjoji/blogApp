const cors = require("cors")
const mongoose = require("mongoose")
const express = require("express")
const UserRouter = require("./controller/userRouter")
const postRouter = require("./controller/postRouter")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://newuser:123abc321@cluster0.nrowaeg.mongodb.net/BlogDb?retryWrites=true&w=majority", { useNewUrlParser: true })

app.use("/blogs",UserRouter)
app.use("/post",postRouter)

app.listen(3003, () => {
    console.log("Serever Running")
})