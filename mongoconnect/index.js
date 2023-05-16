let hello=require('express');
let app = hello()
let mango =require('mongoose');
let managerSchema =require('./schema');
let express = require('express');

app.use (express.json());


 app.listen('5040',()=>{console.log("iam beast");})
 
 mango.connect('mongodb+srv://karthikeyanj:Karthick%4008@cluster0.lticywd.mongodb.net/organization',
 {
    useNewUrlParser:true,
    useUnifiedTopology:true


 }
  )
 .then(()=>{console.log("connected to mongodb");})
 .catch(()=>{console.log("error in connection");})
  
 app.get('/managers',async(request,response)=>{
    try{
    let hi =await managerSchema.find({});
    response.json(hi); 
    }
    catch(error){
        response.sendStatus(400).send(error);
    }

 })
 app.post('/addman',(request,response)=>{
    try{
    let new_manager= new managerSchema(request.body);
   new_manager.save();
    response.status(200).json(new_manager);
    }
    catch(error){
        response.status(400).send(error);
    }

 })
 app.get("/managers/:id", async(request,response)=>{
   try{
      let bloom = await managerSchema.findById(request.params.id);
      //let bloom = await managerSchema.findOne({ _id: request.params.id})
      if(bloom!=null)
      {
         response.json(bloom);
      }
      else{
         response.status(404).send("manager not found");
      }
   }
   catch(error){
      response.send({messege:error.messege})
   }
 })
 app.patch("/update/:id",async(req,res)=>{
   try{
      let upd = await managerSchema.findByIdAndUpdate(req.params.id,req.body);
      if(upd!=null){
         res.json(upd);
      }
      else{
         res.send("notvfound");
      }
   }
      catch(error){
         res.send("error")

      }
   
 })
 app.delete("/delete/:id", async(req,res)=>{
   try{
      let del= await managerSchema.findByIdAndDelete(req.params.id);
      if(del==nul){
         res.send("not found and deleted")
      }
      else{
         res.json(del);
      }
   }
      catch(error){
         res.send({messege:error.messege})
      }
   }
 )