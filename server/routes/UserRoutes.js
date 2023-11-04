const express = require('express');
const { updateUser, getUserListings } = require('../controllers/UserControllers');
const verifyToken = require('../utils/verifyUser');



const  router = express.Router();

router.patch('/updateuser/:id',verifyToken,updateUser);

router.get('/listings/:id',verifyToken,getUserListings);

module.exports = router;