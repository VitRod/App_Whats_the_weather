$(document).ready(function(){

   $("#searchInput").on("keyup", function(e){
        var cityname = e.target.value;
        const APIKey = "425f263559720f69b73a57832858bdea";

      //make a request to the server

      $.ajax({ 
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}`,

         
      });



   });
});