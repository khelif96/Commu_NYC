/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

const authRoute = require('../controller/auth');

router.post('/registerUser', authRoute.registerUser);


// Return Router
module.exports = router;
