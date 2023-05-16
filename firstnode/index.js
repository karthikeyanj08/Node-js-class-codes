var hello = require('express');
var app = hello();
var bubloo = require('./student')
app.listen(4000,()=>{console.log("yay server running!");})
 
 app.get('/',(request,response)=>{
    response.write("HELLO WELCOME!");
    response.write(bubloo[0].sname);
    response.end();

 })//.listen(4000,()=>{console.log("yay server running!")})
 app.get('/aboutus',(request,response)=>{
    response.send("<b> About us <b>");
 })
 app.get('/contact',(request,response)=>{
    response.sendFile(__dirname+'/test.html');
 })
 app.post('/contact',(request,response)=>{
   response.send("Details captured!");
 })
  
 