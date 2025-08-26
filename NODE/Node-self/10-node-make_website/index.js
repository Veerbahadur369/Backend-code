const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {

       if(req.url=="/style.css"){
    fs.readFile("./Html/style.css",(er,data)=>{
        res.writeHead(200,{"content-type":"text/css"})
        res.write(data)
        res.end()
    })
   }
    // +++++++++++++++++++++
  else  if (req.url == "/") {

        fs.readFile("./Html/home.html", (er, data) => {
            res.writeHead(200, { "content-type": "text/html" })
            res.end(data)

        })
    }
    else if (req.url == "/about") {

        fs.readFile("./Html/about.html", (er, data) => {
            res.writeHead(200, { "content-type": "text/html" })
            res.end(data)

        })
    }
    else if (req.url == "/contact") {

        fs.readFile("./Html/contact.html", (er, data) => {
            res.writeHead(200, { "content-type": "text/html" })

            res.end(data)

        })
    }
    else{
        res.write("Somthing went wrong")
        res.end()
    }


})
    .listen(4000, () => {
        console.log("port working at 4000")
    })   