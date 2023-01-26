const express = require('express');
const routes = require('./routes');
const session = require('express-session')
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(session({
    secret: 'senha',
    resave: true,
    cookie: {
        user: 'valor a ser alterado usuario',
        pass: 'senha123'
    }
}))

app.set('trust proxy', 1)
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(routes);
app.listen(3000, () => console.log('Acesse: http://localhost:3000/'));