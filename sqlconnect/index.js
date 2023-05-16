let hi = require('express');
let app = hi();
let sql = require('mssql');

app.listen('3030',()=>{console.log("zuppp!")})
 app.get('/',function(request,response){
    response.write("EXPECTRO PATRONUM!");
    response.end();
 })
  

 let config={
    user:'SA',
    password:'Karthick@08',
    server:'localhost',
    database:'organization',
    options:{
        encrypt:false,
        useUTC:true
    }
 }
 sql.connect(config,function(error){
    if(error){
        console.log(error);
    }
    else
    console.log("SQL CONNECTED");
 })
 app.get('/viewemp',function (request,response){
    let req =new sql.Request();
    req.query('select * from employee',function(records,error){
        if (error)
        console.log(error)
        else
        response.send(records);
    })
 })
 app.post('/insert', function(request,response){
   let req= new sql.Request();
   req.query(`insert into employee VALUES(4,'juju',38000,'2000-5-6',14,'f')`
   ,
   (recordset,error)=>{
      if (error)
      console.log(error)
      else
      response.send(recordset);
   })
})
app.post('/update',function(request,response){
   let req = new sql.Request();
   req.query(`update employee set empname ='karthick' where empid =4 `,
   (recordset,error)=>{
      if(error)
      console.log(error)
      else
      response.send(recordset);
      })
   
})
 