var query = require('./queries');
/* Router for User resource defined in database.js

*/

var express = require("express");
//var db = require("./queries");


var router = express.Router();

//Handles the request to url localhost:3000/friends/login
router.post('/login', function(req,res){
    query.loginFriend(req,res);
    
});

//Handles the request to url localhost:3000/friends/register
router.post('/register', function(req,res){
    query.registerFriend(req,res);
    
});

module.exports = router;

