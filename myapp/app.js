var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/users/:username/:email?', (req, res) => {
    var username = req.params.username
    var email = req.params.email
    res.status(200).send(`hello ${username} ${email}`)
})

app.get('/shop/:id.:format', (req, res) => {
    var id = req.params.id
    var format = req.params.format
    res.status(200).send(`id:${id} format:${format}`)
})

app.get(/dog/, (req, res) => { //reg
    res.status(200).send(`u have a dog`)
})

app.get('/admin', (req, res) => {
    console.log(req.query)

    if (req.query.username == 'admin') {
        res.status(200).send(`hi admin`)
    } else {
        res.status(400).send(`permission denied`)
            // res.status(400).send(`u r not admin`)
    }
})


module.exports = app;
