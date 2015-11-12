$(document).ready(function(){
    
    $("#login").click(loginHandler);
    $("#register").click(registerHandler);
});

//Called when login button is clicked
function loginHandler(event){
    
    var requestData = {
        
        username:$("#username").val(),
        password:$("#password").val()
    }
    
    localStorage['username'] = $("#username").val();
    sessionStorage['user'] = $("#username").val();
    // send login request
    $.ajax({
        method:'POST',
        url:'http://localhost:3000/friends/login',
        data:requestData,
        dataType:'json'
    
    }).done(loginResponseHandler);


}

function loginResponseHandler(data){
    $("#status").text(data.status);
    if(data.status === "OK"){
        window.location.href="http://localhost:3000/persons.html";

    }else{
        $("#status").text(data.status);
    }
}

//Called when register button clicked
function registerHandler(event){
    console.log("register handlerissa ollaan");
    
    var requestData = {
        
        username:$("#username").val(),
        password:$("#password").val()
    }
    // send login request
    $.ajax({
        method:'POST',
        url:'http://localhost:3000/friends/register',
        data:requestData,
        dataType:'json'
    
    }).done(registerResponseHandler);

}

//Called when register response arrives in some point
function registerResponseHandler(data){
    $("#status").text(data.status);

}