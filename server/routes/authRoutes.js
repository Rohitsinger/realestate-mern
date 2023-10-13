const express = require('express');
const { authSignup } = require('../controllers/authControllers');


const  router = express.Router();

router.post('/signup',authSignup);

module.exports = router;