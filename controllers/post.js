const mongoose = require("mongoose")
const posts = require("../models/postModel")
const express = require("express")

const multer = require("multer")

//setting the storage location for the uploade image
const storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, "./public/images/")
    },
    filename : function(req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname)
    }
})
const upload = multer({storage : storage})


const  router = express.Router()


//database connection
try {
    mongoose.connect("mongodb://localhost:27017/blog")
    console.log("Database connection successful")
} catch (error) {
    console.log(error)
}

router.get("/", (req, res) => {
    posts.find({}, (err, data) => {
        if(err) throw err
        res.render("index", { data : data})
    })
})

router.get("/newPost", (req, res) => res.render("newPost"))

router.post("/newPost", upload.single("uploadedImage"),  (req, res) => {
    let title = req.body.title
    let body = req.body.body

    console.log(req.body)

    let post = new posts({
        image : req.file.filename,
        title : title,
        body : body
        
    })
    post.save((err, data) => {
        if(err) throw err
        res.redirect(`/post/${data.slug}`)
    })
} )

router.get("/post/:slug", async (req, res) => {
    let slug = req.params.slug
    posts.findOne({slug : slug}, (err, data) => {
        if(err) throw err
        console.log(data)
        res.render("post", { data : data})
        
    })
    
})

module.exports = router
