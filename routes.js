const express = require('express');
const route = express.Router();
const multer = require('multer')
const config = require('./src/config/multer')

const home = require('./src/controllers/login/landingPage');
const homePage = require('./src/controllers/homePage');
const process = require('./src/controllers/user/process');
const login = require('./src/controllers/login/loginPage');
const admHomePage = require('./src/controllers/adm/admHomePage');
const admProcessDetails = require('./src/controllers/adm/admProcessDetails')
const recoveryPage = require('./src/controllers/login/recover')
const disc = require('./src/controllers/login/login')
const user = require('./src/controllers/user/user')


route.get('/', home.getLandingPage);
route.get('/login', home.getLogin);
route.get('/homePage',homePage.homePageGet);
route.get('/register', home.postSignUp)
route.get('/process/Details/:id',process.processDetailsGet);
route.get('/admHomePage', admHomePage.admHomePageGet);
route.get('/login/recover', recoveryPage.recoverPageGet)
route.get('/disconnect', disc.disconnect)
route.get('/admCandidate/:id', admProcessDetails.admProcess)
route.get('/user/:id', user.userPage)


route.post('/register', home.postSignUp) 
route.post('/registerEndPoint', multer(config).single('profile_pic'), home.register)
route.post('/registerAdmEndPoint', multer(config).single('profile_pic'), home.registerAdm)
route.post('/loginEndPoint', login.loginEndPoint)
route.post('/admHomePageEndPoint', admHomePage.insertProcess)
route.post('/editProcess', admHomePage.updateProcess)
route.post('/subscribeEndPoint', process.Subscribe)
route.post('/removeFromProcess', process.remove)

module.exports = route;