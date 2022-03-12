const mongoose = require("mongoose")

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
    }
})

module.exports = mongoose.model("posts", postSchema)

