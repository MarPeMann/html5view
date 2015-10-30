console.log("Toimii...");

$(document).ready(function(){
    console.log("jquery onload trigger");
    $("nav").css("background-color","lightblue")
    .css("padding","20px").css("border-radius","8px");
    
    $(".about").html("<b>Jotain muuta</b>");
    
    $("[data-dummy]").html("<p>Hello world</p>");
    
    var setting = {
        method:"GET",
        url:"http://localhost:28017/oma/person/",
        dataType:"jsonp",
        jsonp:"jsonp"
    }
    
    $.ajax(setting).done(function(data){
        //console.log(data);
        console.log(Object.keys(data.rows[0]));
        //headerit dynaamisesti taulukkoon
        if(data.rows.length > 0){
            var headers = Object.keys(data.rows[0]);
            var row = $("<tr></tr>");
            for(i = 1; i < headers.length; i++){
                $("<th>" + headers[i] + "</th>").appendTo(row);
            }
            //lisätään row theadiin
            $(row).appendTo("thead");
        }
                
        for(i = 0; i < data.rows.length; i++){
            
            var html = "<tr>" +
                        "<td>" + data.rows[i].name + "</td>" +
                        "<td>" + data.rows[i].address + "</td>" +
                        "<td>" + data.rows[i].age + "</td>" +
                        "<td>" + data.rows[i].email + "</td>" +
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


