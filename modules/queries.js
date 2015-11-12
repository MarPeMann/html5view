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

}

exports.registerFriend = function(req,res){
    
    var friend =  new db.Friends(req.body);
    friend.save(function(err){
        if(err){
            res.send({status:err.message});
        }else{
            res.send({status:"ok"});
        }
        
    });



}

exports.loginFriend = function(req,res){
    
    var searchObject = {username:req.body.username, password:req.body.password}
    
    db.Friends.find(searchObject, function(err,data){
        
        if(err){
            res.send({status:err.message});
        }else{
            if(data.length>0){
                res.send({status:"OK"});
            }else{
                res.send({status:"Wrong username or password"});
            }
            
        }
        
    });



}