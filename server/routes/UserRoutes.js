const express = require('express');
const { updateUser, getUserListings, getUser } = require('../controllers/UserControllers');
const verifyToken = require('../utils/verifyUser');



const  router = express.Router();

router.patch('/updateuser/:id',verifyToken,updateUser);


router.get('/getuser/:id',getUser);

router.get('/listings/:id',verifyToken,getUserListings);

module.exports = router;