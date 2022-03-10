const mongoose = require("mongoose")
const posts = require("../models/postModel")
const bodyParser = require("body-parser")
const express = require("express")
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const  router = express.Router()


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
//database connection
try {
    mongoose.connect("mongodb://localhost:27017/blog")
    console.log("Database connection successful")
} catch (error) {
    console.log(error)
}






router.get("/", (req, res) => res.render("index", {data : data}))

router.get("/newPost", (req, res) => res.render("newPost"))

router.post("/newPost", urlencodedParser,  (req, res) => {
    let title = req.body.title
    let body = req.body.body

    let post = new posts({
        title : title,
        body : body
    })
    post.save((err, data) => {
        if(err) throw err
        res.json(data)
    })
} )

module.exports = router
