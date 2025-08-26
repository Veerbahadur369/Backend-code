const http = require("http")
const { json } = require("stream/consumers")

const api  = [
    {
        name  :"veer",
        age  : 22,
        email :"veer@gmail.com",
        batch: "MERN"
    },
    {
         name : "suraj",
         age :23,
         email :"suraj@gmail.com",
         batch:' '
    },
        {
         name : "SUBHAM",
         age :23,
         email :"subham@gmail.com",
         batch:'jAVA '
    },
        {
         name : "SONU",
         age :21,
         email :"suraj@gmail.com",
         batch:'dATA Analytics '
    }
]
const server  =  http.createServer((req,res) =>{
    res.setHeader("Content-Type","application/json")
     res.write(JSON.stringify(api))
     res.end()

}).listen(5000, () => {
    console.log("Server is running on port 5000")
    console.log("http://localhost:5000")
})

