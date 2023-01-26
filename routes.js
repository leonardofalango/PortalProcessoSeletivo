const express = require('express');
const route = express.Router();

const home = require('./src/controllers/landingPage');
const homePage = require('./src/controllers/homePage');
const process = require('./src/controllers/process');

route.get('/', home.getLandingPage);
route.get('/login', home.getLogin);
route.get('/homePage',homePage.homePageGet);
route.get('/register', home.postSignUp)
route.get('/process/Details/:id',process.processDetailsGet);

route.post('/register', home.postSignUp) 
route.post('/registerEndPoint', home.register)

module.exports = route;