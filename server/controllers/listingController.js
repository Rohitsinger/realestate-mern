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
const getListing = async(req,res,next) => {
   const getList = await Listing.find()
   if(!getList){
    return next(401,'User not found') 
   }
   res.status(200).json(getList)

}

const getCompleteListing = async(req,res,next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = req.query.startIndex || 0;
    let offer = req.query.offer;
    if(offer === undefined || offer==='false'){
      offer = {$in : [false , true] }
    }
    let furnished = req.query.furnished; 
    if(furnished === undefined || furnished==='false'){
      offer = {$in : [false , true]}
    }

    let parking = req.query.parking; 
    if(parking === undefined || parking==='false'){
      offer = {$in : [false , true]}
    }

    let type = req.query.type; 
    if(type === undefined || type==='all'){
      type = {$in : ['sale' , 'rent']}
    }

    const searchTerm = req.query.searchTerm || '';
    const sort = req.query.sort || 'createdAt';

    const order = req.query.order || 'desc';

    const listings = await Listing.find(
      {
       name:{ $regex : searchTerm , $options : 'i'},
       offer,
       type,
      //  parking,
      //  furnished,
      
    }
    )
    .sort({
      [sort] : order
    })
    .limit(limit)
    .skip(startIndex)

 return res.status(200).json(listings)
  } catch (error) {
    console.log(error);
  }

}

module.exports = {createListing,deleteListing,updateListing,getSingleListing,getListing,getCompleteListing}