const Listing = require("../models/listingModel");


const createListing = async(req,res,next) => {
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