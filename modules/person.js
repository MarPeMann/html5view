var express = require("express");
var db = require('./queries');

var router = express.Router();

router.get('/', function(req,res){
    
    db.getAllPersons(req,res);

});

router.post('/', function(req,res){
    
    db.saveNewPerson(req,res);

});

router.put('/', function(req,res){
    db.updatePerson(req,res);

});

router.delete('/:id', function(req,res){
    //console.log(req.params.id);
    //res.send("ok");
    db.deletePerson(req, res);

});


module.exports = router;