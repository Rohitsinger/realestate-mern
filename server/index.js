const express = require('express');
const app = express();
const dotenv = require('dotenv');
const {  mongoose } = require('mongoose');

dotenv.config();
const port = process.env.port || 5000;

//connection to mongodb

mongoose.connect(process.env.MONGO_URL).then((res)=>{
    console.log("Connected to mongodb");
}).catch((err)=>{
    console.log("not connected to mongodb");
})


app.get('/',(req,res)=>{

})


app.listen(port,()=>{
  console.log(`connected to port ${port}`);
})