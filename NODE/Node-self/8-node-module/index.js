const http =require("http")
const form =require("./modules/form.js")
const submit =require("./modules/submit.js")


http.createServer((req,res)=>{

  if(req.url=="/"){
  res.writeHead(200,{"content-type":"text/html"})
   form(req,res);
   console.log("hello")
  }
  else if(req.url=="/submit"){ 
    submit(req,res)  
  }

  res.end() 
})
.listen(4000,(er)=>{
           if(er){
            console.log(er)
            return;
           } 
    console.log("Port listening at 4000")
})