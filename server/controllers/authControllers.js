const User = require("../models/authModel");
const bcrypt = require('bcryptjs')


const authSignup = async(req,res) =>{
    const {username,email,password} = req.body;
    console.log(username,email,password);
    if (!email || !password || !username) {
        return res.status(422).json({ error: "please enter all the fields" });
      }
try {
    const userExist = await User.findOne({email:email})
      if(userExist){
        return res.status(422).json({error:"Email already exist"})
      }
      const hashedPassword = bcrypt.hashSync(password,12)
      const newUser = new User({username,email,password:hashedPassword})

      const userRegistration = await newUser.save()

      if(userRegistration){
        res.status(201).json({message:"user registered successfully"})
      }else{
        res.status(500).json({error:"Failed to register"})
      }
         
} catch (error) {
    res.status(500).json(error.message)
}   
        };
    module.exports = {authSignup}