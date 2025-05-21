const loginauth = (req, res, next)=>{
    const token = "MrStrange";
    const authorized = token ==="MrStrange"
    if(!authorized)
        res.status(401).send("Unauthorized access");
     else
     next();
     
 }
 module.exports = {
    loginauth,
 }