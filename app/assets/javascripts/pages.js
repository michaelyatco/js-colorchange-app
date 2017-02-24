// global $

function changeColors() {
  setTimeout(function() {
    document.getElementById('first').style["color"] = "red";
    setTimeout(function() {
      document.getElementById('second').style["color"] = "purple";
      setTimeout(function() {
        document.getElementById('third').style["color"] = "green";
        setTimeout(function() {
          document.getElementById('fourth').style["color"] = "blue";
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000);  

}

var response = $.get("https://data.cityofnewyork.us/resource/7drc-shp9.json", function(data) {
  console.log(data);
  var htmlString = "<div>";
  for (var i = 0; i < data.length; i++) {
    var medallion = data[i];
    console.log(medallion);
    htmlString += "<h1>" + data[i].name + "</h1>";
    htmlString += "<p>" + data[i].type; + "</p>";
  }
  htmlString += "</div>";
  document.getElementById('medallion').innerHTML = htmlString;
  console.log(document.getElementById('medallion').innerHTML);
});



// fetch('https://data.cityofnewyork.us/resource/7drc-shp9.json').then(function(response) { 
//   // Convert to JSON
//   return response.json();
// }).then(function(j) {
//   // Yay, `j` is a JavaScript object
//   console.log(j); 
// });