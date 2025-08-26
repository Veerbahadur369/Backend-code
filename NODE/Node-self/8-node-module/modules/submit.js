const fs = require("fs");
const path = require('path')
const queryString = require("querystring");
const { buffer } = require("stream/consumers");
function submit(req,res){
  
        const dataChunks=[]
    req.on("data",(chunk)=>{
       dataChunks.push(chunk)
    //    console.log(chunk)
    })
    req.on("end",()=>{
        const Data =Buffer.concat(dataChunks).toString();
        console.log(Data)
        const readableData =queryString.parse(Data)
        console.log(readableData)
        console.log(readableData.name)
        console.log(readableData.email)
        console.log(readableData.phone)
    })
    res.write(`<h1>form Submited</h1> `)
        res.end()
 
}

module.exports = submit;

