const Listing = require("../models/listingModel");
const errorHandler = require("../utils/error");

 const createListing = async (req, res, next) => {
   try {
     const listing = await Listing.create(req.body);
     console.log(listing);
     return res.status(201).json(listing);
   } catch (error) {
     next(error);
     console.log(error);
   }
 };

 const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if(!listing){
  return next(errorHandler,'No listings found')
   
  }
 
// if(req.user.id!== Listing.userRef){
//   return next(errorHandler,'User not matched') 
// }
  try {
   await Listing.findByIdAndDelete(req.params.id)
   res.status(200).send({message:"deleted"})
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if(!listing){
    console.log("erro");
  return next(errorHandler,'No listings found')
  }
//   if(req.user.id!== Listing.userRef){
//   console.log("error");
//   return next(errorHandler,'User not matched') 
// }
  try {
   await Listing.findByIdAndUpdate(req.params.id,req.body,{new:true})
   res.status(200).send("updated")
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const getSingleListing = async(req,res,next) => {
   const getList = await Listing.findById(req.params.id)
   if(!getList){
    return next(errorHandler,'User not found') 
   }
   res.status(200).json(getList)

}

module.exports = {createListing,deleteListing,updateListing,getSingleListing}