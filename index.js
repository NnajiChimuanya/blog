const express = require("express")
const req = require("express/lib/request")
const app = express()
app.set("view engine", "ejs")
app.use(express.static("public"))
const mongoose = require("mongoose")

try {
    mongoose.connect("mongodb://localhost:27017/blog")
    console.log("Database connection successful")
} catch (error) {
    console.log(error)
}




const data = [
    {
        title : "NaySayer",
        about : "jnkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkknnnnnnnnnnnnnnnnnnnnnnndddddd"
    },
    {
        tithle : " Try This out",
        about : "HHJBJBknkjjknkjnjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"
    },
    {
        tithle : " Try This out",
        about : "HHJBJBknkjjknkjnjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"
    },
    {
        tithle : " Try This out",
        about : "HHJBJBknkjjknkjnjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"
    },
    
]

app.get("/", (req, res) => res.render("index", {data : data}))

app.get("/newPost", (req, res) => res.render("newPost"))



app.listen(3000, ()=>console.log("Listening now"))