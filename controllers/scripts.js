console.log("Toimii...");

$(document).ready(function(){
    console.log("jquery onload trigger");
    $("nav").css("background-color","lightblue")
    .css("padding","20px").css("border-radius","8px");
    
    $(".about").html("<b>Jotain muuta</b>");
    
    $("[data-dummy]").html("<p>Hello world</p>");


});



/*window.onload = function(event){

console.log(event);
    
jokuid.innerHTML = "niin on";
jokuid.style.backgroundColor = "black";
}*/


