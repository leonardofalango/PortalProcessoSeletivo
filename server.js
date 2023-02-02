const express = require('express');
const routes = require('./routes');
const session = require('express-session')
const passport = require('passport');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(session({
    secret: 'senha',
    resave: true,
    cookie: {
        user: 'user',
        pass: 'pass'
    }
}))

app.set('trust proxy', 1)
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(routes);

// ________________________________________________________________________
// ________________________________________________________________________

/*  Google AUTH  */
 
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = 'our-google-client-id';
const GOOGLE_CLIENT_SECRET = 'our-google-client-secret';
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));
 
app.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/error' }),
    function(req, res) {
    res.redirect('/success');
});

// ________________________________________________________________________
// ________________________________________________________________________
app.listen(3000, () => console.log('Acesse: http://localhost:3000/'));