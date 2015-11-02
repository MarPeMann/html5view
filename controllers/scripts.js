console.log("Toimii...");

$(document).ready(function(){
    console.log("jquery onload trigger");
    $("nav").css("background-color","lightblue")
    .css("padding","20px").css("border-radius","8px");
    
    $(".about").html("<b>Jotain muuta</b>");
    
    $("[data-dummy]").html("<p>Hello world</p>");
    
    var setting = {
        method:"GET",
        url:"http://localhost:3000/persons/",
        dataType:"json"
    }
    
    $.ajax(setting).done(function(data){
        //console.log(data);
        console.log(Object.keys(data[0]));
        //headerit dynaamisesti taulukkoon
        if(data.length > 0){
            var headers = Object.keys(data[0]);
            var row = $("<tr></tr>");
            for(i = 1; i < headers.length; i++){
                $("<th>" + headers[i] + "</th>").appendTo(row);
            }
            //lisätään row theadiin
            $(row).appendTo("thead");
        }
                
        for(i = 0; i < data.length; i++){
            
            var html = "<tr>" +
                        "<td>" + data[i].name + "</td>" +
                        "<td>" + data[i].address + "</td>" +
                        "<td>" + data[i].age + "</td>" +
                        "<td>" + data[i].email + "</td>" +
                        "</tr>";
            
            $(html).appendTo("tbody");
        }
    });


});



/*window.onload = function(event){

console.log(event);
    
jokuid.innerHTML = "niin on";
jokuid.style.backgroundColor = "black";
}*/


