const express = require('express');
const route = express.Router();

const home = require('./src/controllers/landingPage');
const homePage = require('./src/controllers/homePage');

route.get('/', home.getLandingPage);
route.get('/login', home.getLogin);
route.get('/homePage',homePage.homePageGet);

route.get('/register', home.postSignUp) 


route.post('/register', home.postSignUp) 

module.exports = route;