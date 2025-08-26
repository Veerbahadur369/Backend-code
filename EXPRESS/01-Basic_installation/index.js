const express =require("express")

const app= express()
app.get("",(req,res)=>{
    res.send("<h1>hell express</h1>")
}).listen(4000,()=>{
    console.log("Port listening at 4000")
})