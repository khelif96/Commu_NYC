/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

const authRoute = require('../controller/auth');
const userInfo = require('../controller/user');

router.post('/registerUser', authRoute.registerUser);
router.post('/loginUser', authRoute.loginUser);
router.post('/userInfobyEmail', userInfo.getUserbyEmail);
router.post('/userInfobyID', userInfo.getUserbyID);
router.post('/userInfobyAPI', userInfo.getUserbyAPI);

// Routes that require an api_token after this

router.use(authRoute.checkAuth);

// Return Router
module.exports = router;
