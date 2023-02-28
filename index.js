const express = require("express");
const cors = require('cors');

const iphone=require('./routes/iphone');
const ipad=require('./routes/ipad');
const home=require('./routes/home');
const macbook=require('./routes/macbook');
const accesories=require('./routes/accesories');

const app=express();

app.use(cors());
app.use("/",home);
app.use("/",iphone);
app.use("/",ipad);
app.use("/",macbook);
app.use("/",accesories);

app.get("/",(req,res)=>{
    res.send('<h1>Hello iam Eswar</h1>')
})

app.listen(5000,function(){
    console.log("server is running at port 5000")
})
