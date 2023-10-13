const express = require('express');
const { authSignup, authSignIn } = require('../controllers/authControllers');


const  router = express.Router();

router.post('/signup',authSignup);

router.post('/signin',authSignIn);

module.exports = router;