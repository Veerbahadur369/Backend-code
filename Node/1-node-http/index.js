const app =require("http")
require("dotenv").config()
// console.log(app)
const port =process.env.PORT;
const server  = app.createServer((req,res)=>{
  if (req.url=="/") {
    res.write("start node serever and using http request")
  }
  if(req.url=="/hello"){
    res.write(" \n I am hello url  page");
  }
  if(req.url=="/api"){
    res.write("this is api " )
    // res.write(port)
    console.log("this above port")
    console.log(process)
  }
  res.end()
}) 


server.listen( port,()=>{
    console.log(`http://localhost:${port}`)
    console.log(process.env.ADDRESS)
  })