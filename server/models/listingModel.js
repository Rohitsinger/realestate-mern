const  mongoose  = require("mongoose");
const {ObjectId} = mongoose.Types
const listingSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true,
    unique:true
   },
   address:{
    type:String,
    required:true
   },
   regularPrice:{
    type:Number,
    required:true
   },
   discountedPrice:{
    type:Number,
    required:true
   },
   bedrooms:{
    type:Number,
    required:true
   },
   furnished:{
    type:Number,
    required:true
   },
   bathrooms:{
    type:Number,
    required:true
   },
   parking:{
    type:Boolean,
    required:true
   },
   type:{
    type:String,
    required:true
   },
   offer:{
    type:Boolean,
    required:true
   },
   imageUrl:{
      type : Array,
      required:true
   },
   userRef:{
    type:ObjectId,
    ref:"User"
   }
},{timestamps:true})

const Listing = mongoose.model("listing",listingSchema);

module.exports = Listing