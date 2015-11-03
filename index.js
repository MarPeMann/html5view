var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var database = require('./modules/database');
var queries = require('./modules/queries');
var person = require('./modules/person');
var app = express();

// ====== Middlewares =======
//bodyparser middleware parses json object from http post request
app.use(bodyParser.urlencoded()); 
app.use(function(req,res,next){
    
    console.log(req.method);
    console.log(req.path);
    console.log(__dirname);
    console.log(database.Person);
    //send request forward to stack
    next();
});

app.use('/', express.static(path.join(__dirname, 'views')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/controllers', express.static(path.join(__dirname, 'controllers')));
app.use('/lib', express.static(path.join(__dirname, 'lib')));

app.use('/persons', person);

// ====== Routers ===========
/*
app.get('/', function(req, res){
    //res.send("hello world");
    res.sendfile("views/index.html");
});
*/

app.get('/persons', function(req, res){
    //res.send("hello persons there");
    queries.getAllPersons(req,res);
});

app.listen(3000);


