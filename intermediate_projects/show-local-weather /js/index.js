navigator.geolocation.getCurrentPosition(success, error, options); 
 
// upon success, do this
function success(pos){
  var lon = pos.coords.longitude;
  var lat = pos.coords.latitude; 
   
  var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=imperial&APPID=7b0cbd89d422f532e6b733aa0bcfd666";
  
  $.getJSON(url, function(data){
  var city = data.name;
  var imperialTemp = Math.round(data.main.temp);
  var celsius = Math.round((imperialTemp - 32) / 1.8);
  var detail = data.weather[0].main;
  $(".city").text(city);
    $(".temp").addClass("imperial").html(imperialTemp + "&deg; F");
    $("button").append(" Celsius");
    
 $("button").on("click", function(){
 if($(".temp").hasClass("imperial")) {  $(".temp").empty().removeClass("imperial").addClass("metric").html(celsius + "&deg; C");
                                      $(this).empty().append("Switch to Farenheit");
 }
      else if($(".temp").hasClass("metric")) {
        $(".temp").empty().removeClass("metric").addClass("imperial").html(imperialTemp + "&deg; F");
        $(this).empty().append("Switch to Celsius");
      }
   })
    
}) // end getJSON
} // end success

// upon error, do this
function error(err){
   $(".error").html("Something has gone wrong. Try reloading the page.") 
}

var options = { 
   enableHighAccuracy: true, 
   timeout: 5000,  
   maximumAge: 0 
};