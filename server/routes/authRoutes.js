const express = require('express');
const { authSignup, authSignIn, google, signOut } = require('../controllers/authControllers');


const  router = express.Router();

router.post('/signup',authSignup);

router.post('/signin',authSignIn);

router.post('/google',google);

router.get('/signout',signOut);

module.exports = router;