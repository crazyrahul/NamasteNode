const express = require("express");
const app = express();
    


app.get("/user",(req,res)=>{
    res.send("This is the get method");
}
);
app.post("/user",(req,res)=>{
    res.send("This is the post method");
});

app.use("/user",(req,res)=>{
    res.send("This is the use   method");
}
);

app.listen(4000,(req,res)=>{
    console.log("Server is listening on port no 4000");
});