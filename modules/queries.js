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
        res.redirect("/");
    });



}

// Delete one person from collection

exports.deletePerson = function(req, res){
    //req.params.id returns string "id=xxxxxxxx"
    //split faunction splits the string from "=",
    //and creates an array where [0] contains "id"
    //and [i] contains "xxxxxxxxxxx"
    
    var id = req.params.id.split("=")[1];
    console.log(id);
    db.Person.remove({_id:id}, function(err){
        if(err){
            res.send(err.message);
        }else{
            res.send("delete ok");
        }
    });
}

//updates individual person data
exports.updatePerson = function(req, res){

    var updateData = {
        name:req.body.name,
        address:req.body.address,
        age:req.body.age
    
    }
    db.Person.update({_id:req.body.id}, updateData, function(err){
        res.send("updated");
    
    });

}

// KAtotaampa ny sitten...
exports.findPerson = function(req, res){
    
    var name = req.params.nimi.split("=")[1];
    console.log("name: " + name);
    
    db.Person.find({name:{$regex : "^" + name,'$options':'i'}}, function(err,data){
        if(err){
            console.log(err.message);
            res.send("erroria pukkaa");
        
        }else{
            console.log(data);
            res.send(data);
        }
        
    
    
    
    });

/*    db.Person.find(function(err, searchData){
        if(err){
            console.log(err.message);
            res.send("erroria pukkaa");
        
        }else{
            console.log(data);
            //res.send(data);
        }
    
    
    });*/


}