const http  = require("http")


http.createServer((req,res)=>{
    console.log(req.method)
    if (req.url=="/") {
        res.write("<h1>THis is home page</h1>")
    }
    else if(req.url=="/about"){res.write("<h1>THis is about page</h1>")}
    else if(req.url=="/contact"){res.write("<h1>THis is contact page</h1>")}
   
    res.end()

}).listen(5000,()=>{
    console.log("port running on server 5000")
    console.log("http://localhost:5000")
})