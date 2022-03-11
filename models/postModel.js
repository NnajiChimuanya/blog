const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    image : {
        type : String
    },
    imagePath : {
        type : String
    },
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("posts", postSchema)

