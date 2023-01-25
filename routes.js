const express = require('express');
const route = express.Router();

const home = require('./src/controllers/landingPage');
const homePage = require('./src/controllers/homePage');

route.get('/', home.getLandingPage);
route.get('/register', home.getSignUp) 
route.get('/homePage',homePage.homePageGet);

module.exports = route;