/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

const authRoute = require('../controller/auth');
const opportunityModification = require('../controller/opportunityModification');

router.post('/registerUser', authRoute.registerUser);
router.post('/loginUser', authRoute.loginUser);


// Routes that require an api_token after this

router.use(authRoute.checkAuth);

router.post('/createOpportunity', opportunityModification.createOpportunity);

// Return Router
module.exports = router;
