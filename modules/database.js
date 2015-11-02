var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/oma', connectionStatus);

function connectionStatus(err, ok){
    if(err){
        console.log(err.message);
    }else{
        console.log("connected");
    }
}

var Person = mongoose.model('Person', {
    name:String,
    address:String,
    age:{type:Number, min:0,max:120}
},'person');

//nyt näkyy modulin ulkopuolelle
exports.Person = Person;

/*exports.myFunction(){

    console.log("This: ");
}*/