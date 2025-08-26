// import express from "express"
const express = require("express")


const app = express()
// console.log(app) 
// console.log("hello hi how are you")
const path = "/"
const api = [{ id: 1, name: "veer", course: "MERN" },
{ id: 2, name: "veer" }, { id: 3, name: "veer" },
{ id: 4, name: "veer" }, { id: 5, name: "veer" }
]
if (path) {
    app.get("/", (req, res) => {
        res.send(api)
    })
}

app.listen(4000, () => {
    console.log("port running on 4000")
})