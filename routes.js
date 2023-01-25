const express = require('express');
const route = express.Router();

const home = require('./src/controllers/landingPage');


route.get('/', home.getLandingPage);
route.get('/register', home.getSignUp)

module.exports = route;