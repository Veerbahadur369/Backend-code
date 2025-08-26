const http = require("http")
require("dotenv").config()
console.log(process.env)

const  app = http.createServer((req,res)=>{
    if (req.url=="/") {
          res.write("hello default welcome page ")
         
    }
    else if(req.url=="/about"){
        res.write("you click about page")
    }
    else{
        console.log("this is error page")
        res.write("<h1>this is not valide website url</h1>")
    }

     res.end()
})


const port =process.env.PORT
app.listen(port,(req,res)=>{
    console.log("port is running "+port)
    console.log('THIS IS YOUR WEBSITE LINK '+process.env.API)
})