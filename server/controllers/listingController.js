const Listing = require("../models/listingModel");


const createListing = async(req,res,next) => {
   const {name,description,address,regularPrice,discountedPrice,bedrooms,furnished,bathrooms,parking,type,offer,imageUrl,refUser} = req.body
   if(!req.body) return
   try {
   
    const listingDetails = await Listing.create(req.body)
    console.log(listingDetails);
    } catch (error) {
    console.log(error);
    res.send(error)
   }
}

module.exports = {createListing}