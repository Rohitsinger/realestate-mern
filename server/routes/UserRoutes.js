const express = require('express');
const { updateUser } = require('../controllers/UserControllers');
const verifyToken = require('../utils/verifyUser');



const  router = express.Router();

router.patch('/updateuser/:id',verifyToken,updateUser);

module.exports = router;