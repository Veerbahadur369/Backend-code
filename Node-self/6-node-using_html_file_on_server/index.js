const http  = require("http")
const fs  = require("fs")

http.createServer((req,res)=>{
   fs.readFile("./public/home.html","utf-8",(er,data)=>{
     if(er){
      res.writable("somthing went wrong")
     }
     else{
       res.writeHead(206,{"content-type":"text/html"})
      res.write(data)
      res.end()
     }


   })

}
).listen(4000)