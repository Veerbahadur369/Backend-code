const http = require("http")
const fs = require("fs");
const path = require("path");

let operation =process.argv[2]
const fileName=process.argv[3];
const content=process.argv[4];
if(!operation){
console.log("-----------Operation you can perform---------------")
console.log("write")
console.log("read")
console.log("delete")
console.log("update")
}

else if(operation=="write"){
 const pathName ="./CRUD-Files/"+fileName+".txt"
fs.writeFile(pathName,content,(er)=>{
            if(er) console.error("Error found in "+operation)
              else console.log(operation+" operation successfully")
  })
}

else if(operation=="read"){
 const  pathName ="./CRUD-Files/"+fileName+".txt"
  fs.readFile(pathName,"utf-8",(er,data)=>{
       if(er) console.error("Error foun in "+operation)
      else console.log(data)
      })
}

else if(operation=="update"){
 const pathName ="./CRUD-Files/"+fileName+".txt"
fs.appendFile(pathName,content,(er)=>{
            if(er) console.error("Error found in "+operation)
              else console.log(operation+" operation successfully")
  })
}


else if(operation=="delete"){
 const  pathName ="./CRUD-Files/"+fileName+".txt"
  fs.unlink(pathName,(er)=>{
       if(er) console.error("Error found in "+operation)
      else console.log(operation+" operation successfully")
      })
}

else{
  console.log("Please enter valid operation")
}
  
  