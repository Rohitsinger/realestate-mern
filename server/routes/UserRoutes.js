const express = require('express');
const { userSignup } = require('../controllers/UserControllers');


const  router = express.Router();

router.get('/signup',userSignup);

module.exports = router;