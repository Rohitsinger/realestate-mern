const User = require("../models/authModel");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { verifyToken } = require('../utils/verifyUser');
const authSignup = async(req,res,next) =>{
    const {username,email,password} = req.body;
    console.log(username,email,password);
    // if (!email || !password || !username || !avatar) {
    //     return res.status(422).json({ error: "please enter all the fields" });
    //   }
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
      } 

      const token = jwt.sign({ id: registered._id }, process.env.SECRET_KEY);
      console.log(token);
      const { password: pass, ...rest } = registered._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json({rest,token});

         
} catch (error) {
  next(error)
}   

};


const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, null);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY);
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }

}


const signOut = (req,res,next) =>{
  try {
    res.clearCookie('access_token')
     res.status(200).send("signout")
  } catch (error) {
     next(error)
  }
}

module.exports = {authSignup,authSignIn,google,signOut}