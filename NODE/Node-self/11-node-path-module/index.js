const path = require("path");

console.log(path.dirname(__dirname));       
console.log(path.dirname(__filename));       

console.log(path.basename(__dirname))
console.log(path.basename(__filename))

console.log(path.extname(__filename ))

console.log(path.isAbsolute(path.dirname(__filename)))


         // ?  __dirname and __filename these are part of global module not Path module
         // *  __dirname and __filename these are part of global module not Path module
         // ~  __dirname and __filename these are part of global module not Path module
         // ^  __dirname and __filename these are part of global module not Path module
         // &  __dirname and __filename these are part of global module not Path module
         // !  __dirname and __filename these are part of global module not Path module
console.log(__dirname)
console.log(__filename)