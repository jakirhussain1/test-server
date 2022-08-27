const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Hello World I am coming")
})



app.listen(port,() =>{
    console.log("Server Start",port);
})