var db = require('./database');

exports.getAllPersons = function(req,res){
    
    db.Person.find(function(err,data){
        if(err){
            console.log(err.message);
            res.send("error in db");
        }else{
            res.send(data);
        }
        
    });
    
}

// Saves new person information to person collection
exports.saveNewPerson = function(req, res){
    
    var personTemp = new db.Person(req.body);
    //save to db
    personTemp.save(function(err,ok){
        res.send("done");
    });



}