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

app.use('/', routes);
app.use('/users', users);

app.get('/post',(req,res) => {
  var postData = [
    {
      title: 'Where is she',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' ,
      author: 'Da doe',
      email: 'Das@doe.com' 
    },
    {
      title: 'Arabi',
      body: 'Lorem ipsum2 dolor sit amet, consectetur adipisicing elit, sed do eiusmod' ,
      author: 'Fa doe',
      email: 'Fas@doe.com' 
    },
    {
      title: 'Made in thai',
      body: 'Lorem ipsum3 dolor sit amet, consectetur adipisicing elit, sed do eiusmod' ,
      author: 'Ra doe',
      email: 'Ras@doe.com' 
    },
    {
      title: 'The Last Post',
      body: 'Lorem ipsum LAST dolor sit amet, consectetur adipisicing elit, sed do eiusmod' ,
      author: 'Pa doe',
      email: 'Pas@doe.com' 
    },
  ]
  res.status(200).json(postData)
})
//title
//body
//author
//email

module.exports = app;
