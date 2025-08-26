const fs = require("fs");
const path = require('path')
function form(req,res){
    res.write(`
        <form action="/submit" method="POST">
        <input type="text" placeholder="Enter name....." name="name"> 
        <input type="email" placeholder="Enter Email...." name="email"> 
        <input type="tel" placeholder="Enter Phone...." name="phone"> 

        <input type="submit">

    </form>
        `)

      
        res.end()
 
}

module.exports = form;

