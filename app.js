const express = require("express");
const app = express();



app.use("/hello",(req,res)=>
{
    res.send("This is Hello Page");
});
app.use((req,res)=>{
    res.send("This is the Dashboard");
});

app.use("/test", (req,res)=>{
    console.log("this is the test page");
});

app.listen(4000,(req,res)=>{
    console.log("Server is listening on port no 4000");
});