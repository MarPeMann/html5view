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