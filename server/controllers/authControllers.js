const User = require("../models/authModel");
const bcrypt = require('bcryptjs')


const authSignup = async(req,res,next) =>{
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
        res.status(500).json({error:"Failed to register",success:false})
      }
         
} catch (error) {
  next(error)
}   
        };

        //signin

const authSignIn = async(req,res,next) =>{
    const {email,password} = req.body;
    console.log(email,password);
    if (!email || !password ) {
        return res.status(422).json({ error: "please enter all the fields" });
      }
try {
    const registered = await User.findOne({email:email})
      if(!registered){
        return res.status(422).json({message:"user not Found"})
      }
      const isMatched = await bcrypt.compare(password,registered.password)

      if(!isMatched){
        res.status(500).json({error:"Credential not matched"})
      } else{
        res.status(201).json({message:"user signedin successfully"})
      }

         
} catch (error) {
  next(error)
}   

};

module.exports = {authSignup,authSignIn}