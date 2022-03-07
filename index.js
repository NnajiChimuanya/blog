const express = require("express")
const app = express()
app.set("view engine", "ejs")
app.use(express.static("public"))




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



app.listen(3000, ()=>console.log("Listening now"))