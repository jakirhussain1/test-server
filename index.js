const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Something change in server")
})



app.listen(port,() =>{
    console.log("Server Start",port);
})