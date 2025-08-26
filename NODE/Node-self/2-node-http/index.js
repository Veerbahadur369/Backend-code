const http = require("http")
require('dotenv').config()

const port = process.env.PORT

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html")
    res.write("hel h1 tag are you good")
    res.end()
   
}) 

server.listen(port,()=>{
   console.log("port connected to the "+port)
   console.log(process.env.URL)
})

