const mongoose = require("mongoose")
const slugify = require("slugify")

const postSchema = new mongoose.Schema({
    image : {
        type : String
    },
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    createdAt : {
        type : String,
        default : (new Date()).toLocaleString()
    },
    slug : {
        type : String,
        required : true,
        unique : true
    }
})

postSchema.pre("validate", function(next) {
    if(this.title) {
        this.slug = slugify(this.title, {
            lower : true,
            strict : true
        })
    }
    next()
})

module.exports = mongoose.model("posts", postSchema)

