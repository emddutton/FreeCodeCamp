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
  $(".temp").html(imperialTemp + "&deg;");
}) // end getJSON
}

// upon error, do this
function error(err){
   $(".error").html("Something has gone wrong. Try reloading the page.") 
}

var options = { 
   enableHighAccuracy: true, 
   timeout: 5000,  
   maximumAge: 0 
};