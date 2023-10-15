const express = require('express');
const { authSignup, authSignIn, google } = require('../controllers/authControllers');


const  router = express.Router();

router.post('/signup',authSignup);

router.post('/signin',authSignIn);

router.post('/google',google);

module.exports = router;