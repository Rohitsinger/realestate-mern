const express = require('express');
const app = express();
const dotenv = require('dotenv');
const {  mongoose } = require('mongoose');
const userRouter = require('./routes/UserRoutes');
const authRouter = require('./routes/authRoutes');
dotenv.config();
const port = process.env.port || 5000;

//connection to mongodb

mongoose.connect(process.env.MONGO_URL).then((res)=>{
    console.log("Connected to mongodb");
}).catch((err)=>{
    console.log("not connected to mongodb",err);
})

//use middelwares
app.use(express.json())

//middelwares for routes
app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})

app.listen(port,()=>{
  console.log(`connected to port ${port}`);
})