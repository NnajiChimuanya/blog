const express = require("express")
const postRoute = require("./controllers/post")
const app = express()
app.set("view engine", "ejs")
app.use(express.static("public"))

app.use("/", postRoute)




app.listen(3000, ()=>console.log("Listening now"))