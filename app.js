const express = require("express");
const app = express();
const {loginauth} = require("./middleware/auth");
 
app.use('/admin',loginauth,);// it mounted all the routers

app.get ('/admin/adduser',
    (req,res)=>{res.send("add user in database ")});

app.get('/admin/deleteuser',
    (req,res)=>{res.send("delete user from database")});

app.listen(4000,(req,res)=>{
    console.log("Server is listening on port no 4000");
});