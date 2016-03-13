var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongoskin');
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


var db = mongo.db("mongodb://localhost:27017/blog", { native_parser: true });
db.bind('post');


app.get('/post', (req, res) => {
    /*
    //move to /list_post
        db.post.find().toArray(function(err, postData) {
            //console.log(postData);
            res.status(200).json(postData)

        });

        */


    /*
    var postData = [
      {
        title: 'Where is she',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' ,
        author: 'Da doe',
        email: 'Das@doe.com' 
      },
    ]
    */
})

app.put('/post/:id', (req, res) => {
    //console.log(req.body)
    var insertData = {
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
        email: req.body.email
    }
    if (req.body.title.length < 5) {
        return res.status(400).json({ error: 'too short title' })
    }
    var id = req.params.id
    db.post.updateById(id, insertData, (error, results) => {
            if (error) {
                return res.status(400).json(error)
            }
            res.status(200).send(results)
        })
        /*
            db.post.insert(insertData, (error, results) => {
                if (error) {
                    return res.status(400).json(error)
                }
                res.status(200).send("OK")
            })
            */
})

app.delete('/post/:title', (req, res) => {
    var title = req.params.title
    db.post.remove({ title: title }, (error, results) => {
        if (error) {
            return res.status(400).json(error)
        }
        res.status(200).json(results)
    })
})

app.get('/list_post', (req, res) => {
    db.post.find().toArray(function(err, postData) {
        //console.log(postData);
        res.render('post', { postData: postData })
    });

})

//GET
//POST - create data
//PUT - update data
//Delete - delete data

process.on('SIGTERM', function() {
    db.close()
    console.log("closing")
    process.exit()
})
module.exports = app;
