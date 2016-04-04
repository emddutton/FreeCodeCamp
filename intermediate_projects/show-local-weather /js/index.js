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
  var detail = data.weather[0].main.toLowerCase();
    
   var prettyPics = {
      clouds: {
        background: "http://res.cloudinary.com/dgtkvm9hr/image/upload/v1459632686/cloudy_wc1mgq.jpg",
        icon: "http://res.cloudinary.com/dgtkvm9hr/image/upload/v1459657480/Cloud_rafiyw.png"
      },
      clear: {
        background: 'http://res.cloudinary.com/dgtkvm9hr/image/upload/v1459632674/clear_zbptzw.jpg',
        icon: "http://res.cloudinary.com/dgtkvm9hr/image/upload/v1459657480/Sun_ohyynn.png"
      },
      rain: {
        background: "http://res.cloudinary.com/dgtkvm9hr/image/upload/v1459632689/rain_ewdxfs.jpg",
        icon: "http://res.cloudinary.com/dgtkvm9hr/image/upload/v1459657480/Rain_he25cj.png"
      },
      snow: {
        background: "http://res.cloudinary.com/dgtkvm9hr/image/upload/v1459632687/snow_n9uuth.jpg",
        icon: "http://res.cloudinary.com/dgtkvm9hr/image/upload/v1459632687/snow_n9uuth.jpg"
      },
      default: {
        background: "http://res.cloudinary.com/dgtkvm9hr/image/upload/v1459701011/default_p8htre.jpg",
        icon: "http://res.cloudinary.com/dgtkvm9hr/image/upload/v1459657480/PartlySunny_gbx368.png"
      }
    };
    
for (var key in prettyPics) {
    if (!prettyPics.hasOwnProperty(key)) continue;
    var obj = prettyPics[key];  
    if(key == detail) {
      console.log(key);
      console.log(obj.background);
      console.log(obj.icon);
      $("body").css({'background': 'url(' + obj.background + ') no-repeat'}); 
      $(".detail").html('"<img src=" + obj.icon');
    }
}
    
$("body").attr("id", detail);
    
$(".city").text(city);
 
$(".detail").html(detail);
    $(".temp").addClass("imperial").html(imperialTemp + "&deg; F");
$("button").append(" Celsius");
    
$("button").on("click", function(){
 if($(".temp").hasClass("imperial")) {$(".temp").empty().removeClass("imperial").addClass("metric").html(celsius + "&deg; C");
                                      $(this).empty().append("Switch to Farenheit");
}
else if($(".temp").hasClass("metric"))
{$(".temp").empty().removeClass("metric").addClass("imperial").html(imperialTemp + "&deg; F");
        $(this).empty().append("Switch to Celsius");}
}) //end button click
    
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