const express = require('express');
const { createListing, deleteListing, updateListing, getSingleListing,getListing, getCompleteListing } = require('../controllers/listingController');
const verifyToken  = require('../utils/verifyUser');

const  router = express.Router();

router.post('/createlists',verifyToken,createListing);

router.patch('/update/:id',verifyToken,updateListing);

router.get('/getSingleList/:id',getSingleListing);

router.get('/getLists',getListing);

router.get('/getCompleteLists',getCompleteListing);

router.delete('/delete/:id',deleteListing);

module.exports = router;