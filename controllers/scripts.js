console.log("Toimii...");

// Shown to every function
//var g_person_data;

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
                        "<td><input type='button' id=" + data[i]._id + " value='modify'/></td>" +
                        "</tr>";
            
            $(html).appendTo("tbody");
        }
        
            // Get all elements from DOM where element has 
    // attribute type with value button.
    // then add event handler for click event of them.
    
    $("[type=button]").click(function(click_data){
            //console.log(click_data);
            for(i = 0; i < data.length; i++){
                
                if(click_data.currentTarget.id == data[i]._id){
                    
                    buildModifyUI(data[i]);
                    break;
                
                }

            }

        });
        
    });
    



});

function buildModifyUI(person_data){
    var html = "<input type='text' value='" + person_data.name + "'/>";
    
    $("body").html(html);
}



/*window.onload = function(event){

console.log(event);
    
jokuid.innerHTML = "niin on";
jokuid.style.backgroundColor = "black";
}*/


