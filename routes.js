const express = require('express');
const route = express.Router();

const home = require('./src/controllers/landingPage');
const homePage = require('./src/controllers/homePage');
const process = require('./src/controllers/process');
const login = require('./src/controllers/loginPage');
const AdmHomePage = require('./src/controllers/Adm/AdmHomePage');
const recoveryPage = require('./src/controllers/recover')

route.get('/', home.getLandingPage);
route.get('/login', home.getLogin);
route.get('/homePage',homePage.homePageGet);
route.get('/register', home.postSignUp)
route.get('/process/Details/:id',process.processDetailsGet);
route.get('/AdmHomePage',AdmHomePage.AdmHomePageGet);
route.get('/login/recover', recoveryPage.recoverPageGet)

route.post('/register', home.postSignUp) 
route.post('/registerEndPoint', home.register)
route.post('/loginEndPoint', login.loginEndPoint)

module.exports = route;