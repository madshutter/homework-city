//Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
$(document).ready(function(){

	//loop array in JavaScript to loop though the cities
	for(i=0;i<cities.length;i++) {

		//append an <option> element to our <select> drop-down menu
		$('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }

	//When the <select> element changes, update the background image based on what is selected
	$('form').on('change', '#city-type',function(){

		//get the value of user input
		var city = $('#city-type').val();

		//conditions to control the flow of the application
		if(city == 'NYC') {
      		$('body').attr('class','nyc');
    	}
    
    	else if (city == 'SF') {
      		$('body').attr('class','sf');
    	}
    
    	else if (city == 'LA') {
      		$('body').attr('class','la');
    	}
    
    	else if (city == 'ATX') {
      		$('body').attr('class','austin');
    	}
    
    	else if (city == 'SYD') {
      		$('body').attr('class','sydney');
    	}
  });
});
