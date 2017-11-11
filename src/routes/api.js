/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

const authRoute = require('../controller/auth');
const userInfo = require('../controller/user');
const opportunityRoute = require('../controller/opportunity');

router.post('/registerUser', authRoute.registerUser);
router.post('/loginUser', authRoute.loginUser);
router.post('/userInfobyEmail', userInfo.getUserbyEmail);
router.post('/userInfobyID', userInfo.getUserbyID);
router.post('/opportunity', opportunityRoute.getOpportunities);

// Routes that require an api_token after this

router.use(authRoute.checkAuth);

router.post('/userInfobyAPI', userInfo.getUserbyAPI);

// Return Router
module.exports = router;
