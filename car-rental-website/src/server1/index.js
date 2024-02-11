const port=process.env.PORT || 3005;
const cors=require("cors");
const express=require('express');
const conne= require('./data/connection');
const bodyParser = require('body-parser');
const routesb=require("./data/routesB");
const routesc=require('./data/routesU')
conne(); 
const app=express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/u',routesb);
app.use('/uu',routesc);

app.use('/uploads', express.static('uploads')); 
app.listen(port,()=>{
    console.log("Serve list");
}); 
