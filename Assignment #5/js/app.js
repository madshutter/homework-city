
$(document).ready(function() {

  //prevent page refresh when submit button is selected
  $("#submit-btn").click(function(){
    event.preventDefault();


    //get the value of the #city-type input 
    var city = $("#city-type").val();
    $("#city-type").val('');
    
    //BONUS -- Remove extra spaces or new lines that users or the browser might add before or after their input
    city = city.toLowerCase().trim();

    
    // if the user submits "New York" or "New York City" or "NYC" make the background of the page nyc.jpg (ccs changed to .nyc)
    if(city == "new york city" || city == "nyc" || city == "new york") {
      $("body").attr("class","nyc");
    }
    // if the user submits "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg (css changed to .sf)
    else if (city == "sf" || city == "san francisco" || city == "bay area") {
      $("body").attr("class","sf");
    }
    
    // if the user submits "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg (css changed to .la)
    else if (city == "los angeles" || city == "la" || city == "lax") {
      $("body").attr("class","la");
    }

    // if the user submits "Austin" or "ATX" make the background of the page austin.jpg (css changed to .austin)
    else if (city == "austin" || city == "atx") {
      $("body").attr("class","austin");
    }
  
    // if the user submits "Sydney" or "SYD" make the background of the page sydney.jpg
    else if (city == 'sydney' || city == 'syd') {
      $('body').attr('class','sydney');
    }

     //BONUS -- Reset user input field after submitted
    $("form").trigger("reset");
    //BONUS -- Remove extra spaces or new lines
    
  });
   
   


   
});

// 