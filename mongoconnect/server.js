let express = require('express');
let app= express();
app.use(express.json());
let bcrypt = require('bcrypt');
let moongoose = require('mongoose');
let usermodel = require('./userschema');
app.listen('5040',console.log("server is running"));

moongoose.connect('mongodb+srv://karthikeyanj:Karthick%4008@cluster0.lticywd.mongodb.net/organization')
.then(console.log("connected to mNGO DB"))
.catch((error)=>{console.log(error);})


app.post('/adduser', async(req, res)=>{
    try{
        let key = await bcrypt.genSalt(); //generating the salt
        let changedPassword= await bcrypt.hash(req.body.password, key); //encrypting the password
        let newuser = await usermodel({userid: req.body.userid, password:changedPassword});
        newuser.save();
        res.json(newuser);
    }
    catch(error){
        {error}
    } })
    app.get('/user', async(req, res)=> {
        let newuser =await usermodel.findOne({userid:req.body.userid});
        try{
            if(newuser!= null){
                if(await bcrypt.compare(req.body.password, newuser.password )) {
                    res.send("User found");
                }
                else{
                    res.send("try again");
                }
            } }
        catch(error){ {"error"} }
    })