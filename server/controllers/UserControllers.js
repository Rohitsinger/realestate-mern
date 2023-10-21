const User = require("../models/authModel")
const bcrypt = require('bcryptjs');
const {errorHandler} = require("../utils/error");

const updateUser = async(req,res,next) =>{
   if(req.user.id!== req.params.id) { res.send(errorHandler)}
 console.log(req.user);
   try {
      
   
if(req.body.password){
   req.body.password = await bcrypt.hashSync(req.body.password,12)
}

const user = await User.findByIdAndUpdate(req.params.id,
   {
   $set:{
      username:req.body.name,
      email:req.body.email,
      password:req.body.password,
      avatar:req.body.avatar
   },
},{new:true})
console.log(user);
const { password, ...rest } = user._doc;

res.status(200).json(rest);
   } catch (error) {
    console.log(error);
   }
}

module.exports = {updateUser}