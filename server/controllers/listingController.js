const Listing = require("../models/listingModel");


// const createListing = async(req,res,next) => {


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

module.exports = {createListing}