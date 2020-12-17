const http = require("http")
const express = require('express')
const app = express();
app.use=(express.json());
const mongoose=require('mongoose'); 
require('dotenv').config();
const routes= require("./route/auth.js");

mongoose.connect(process.env.MONGODB_URI,{},).then(()=>{
    console.log("Successfully connected to MongoDB")
})
.catch(err=>{
    console.error("Some problem occured",err)
})


//const server=http.createServer(app)
app.use(routes)

app.listen(PORT, ()=>{
    console.log("express server is working")
})

const port = process.env.PORT



