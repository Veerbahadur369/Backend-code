const { error } = require("console")
const fs = require("fs")

// ==========================================CREATE FILE START==============================================================
          
fs.writeFile("myfile.text","This is the most common and recommended way to read files in Node.js, as it operates asynchronously and prevents blocking the main thread.",(err)=>{
    if(err) throw console.log(err)
        console.log("file created")
})
// ==========================================CREATE FILE END==============================================================

    // read file 1
   //======================================READ AND DELETE START========================================================
fs.readFile("myfile.text","utf-8",(er,data)=>{
    if(er) console.error(er)
        else{
    console.log("read file 1 \n \n")
    console.log(data) 
        }
})
fs.appendFile("myfile.text","\n this is first apend file in myfile.text",(er)=>{
    if(er)  console.log(er)
        console.log("Append 1 succesfull")
})


// read file 2
fs.readFile("myfile.text","utf-8",(er,data)=>{
    if(er) console.error(er)
        else{
    console.log("read file  2  \n \n")
    console.log(data) 
        }
})

fs.appendFile("myfile.text","\n this is second append text in myfile.text",(er)=>{
        if(er) throw console.error(er)
            console.log("Append 2 succesfull")
})
    //    read file 3
fs.readFile("myfile.text","utf-8",(er,data)=>{
    if(er) console.error(er)
        else{
    console.log("read file  3  \n \n")
    console.log(data) 
    
        }
})

   //========================================READ AND DELETE END========================================================


   //========================================RENAME FILE AND FOLDER START========================================================


fs.rename("myfile.text","readfile.text",(er)=>{
    if(er)  console.error(er)
    console.log("rename succcesfull")
})


   //========================================RENAME FILE AND FOLDER END========================================================



   //========================================CREATE A FOLDER  START========================================================
fs.mkdir("./Folder",(er)=>{
    if(er) console.error(er)
        console.log("new folder created")
})

fs.mkdir("./NewFolder",(er)=>{
    if(er) console.error(er)
        console.log("File created")
})


   //========================================CREATE A FOLDER  END========================================================



   //========================================COPYING EXISTING FILES IN ANOTHER FOLDER FILE  START========================================================

fs.copyFile("readfile.text","./Folder/copy.text",(er)=>{
    if(er ) console.error(er)
        console.log("file copied")
})
   //========================================COPYING EXISTING FILES IN ANOTHER FOLDER FILE  END========================================================

fs.writeFile("newTextCopy.text","Know  i am writing in this file new text ",(er)=>{
    if (er) {
        console.error(er)
    } else {
        console.log("Now re-write in this existing file sucsesfully")
    }
})


    // using while need to create file in folder

fs.writeFile("./NewFolder/Mydata.js",`console.log("I am writing js file in new folder")`,(er)=>{
    if(er) console.error(er.message)
        console.log("File write in the newfolder succesfully")
})




//==================================================DELETE OPERATIONS START=========================================================================

//   Deleting operation on  createdfile files and folders
                // 1) when we delete file we need to use unlink("file_path_name.extension",(callback)) directory 
                // 2) when we delete file we need to use rm("file_path_name.extension",(callback)) directory  it work when folder empty

                // 3) when we delete file we need to use rm("file_path_name.extension",{recusive:true},(callback)) directory .it used when folder contaions files
// -------------------------------------------START CODEING----------------------------------------------------------------------------------------
// fs.unlink("newText.text",(er)=>{
//     if (er) console.error(er.message)
// })

// fs.unlink("myfile.text",(er)=>{
//     if (er) console.error(er.message)
// })


// fs.rm("./NewFolder",{recursive:true},(er)=>{
//     if (er) {
//         console.error(er.name)
//     } else {
//         console.log("folder removed")
//     }
// })

// fs.rm("./Folder",{recursive:true},(er)=>{
//     if (er) {
//         console.error(er)
//     } else {
//         console.log("folder removed")
//     }
// })

//=======================================================DELETE OPERATIONS END=================================================================