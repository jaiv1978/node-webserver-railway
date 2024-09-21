require('dotenv').config();
const express = require('express')
var hbs = require('hbs');
const app = express();
const port = process.env.PORT;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public', { extensions: ['html'] }));

app.get('/', function (req, res) {
    res.render('home', {  
        nombre: 'Jorge Ibarra',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {  
        nombre: 'Jorge Ibarra',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {  
        nombre: 'Jorge Ibarra',
        titulo: 'Curso de Node'
    });
});

app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta')
});

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port);