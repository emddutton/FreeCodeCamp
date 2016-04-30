var toSearch;
$(".searchField").on('keyup click', function (e) {
    if (e.keyCode == 13) {
        toSearch = $("#search").val();
    }

  $.ajax({
  url: '//en.wikipedia.org/w/api.php?format=json&action=query',
  data: { action: 'query', list: 'search', srsearch: toSearch, prop: 'extracts' },
  dataType: 'jsonp',
  success: function (x) {
    console.log(x);
 console.log(x.query.search.length);
    for(var i = 0; i < x.query.search.length; i++) {
    var title = x.query.search[i].title;
    console.log(title);
    var snippet = x.query.search[i].snippet;
    console.log(snippet);
    var baseurl = "http://en.wikipedia.org/wiki/"; 
   $(".results").append('<a href=' + '"' + baseurl + title + '"' + ' TARGET="_blank">' + '<p>' + title + '</p>' + '<p>' + snippet + "..." + '</p>' + '</a>');   
    } 
  }
});
  
});