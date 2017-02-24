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
  // console.log(data);
  var htmlString = "";
  for (var i = 0; i < data.length; i++) {
    var medallion = data[i];
    htmlString += "<div onclick='changeMedallion(this)'>";
    htmlString += "<p>" + data[i].name; + "</p>";
    htmlString += "<p>" + data[i].medallion_type; + "</p>";
    htmlString += "<p class='model_year'>" + data[i].model_year; + "</p>";
    htmlString += "<p>" + data[i].vehicle_type; + "</p>";
    htmlString += "</div>";
  }
  // console.log(htmlString);
  document.getElementById('medallion').innerHTML = htmlString;
});

var colors = ["red", "black", "green", "yellow", "orange"];
function changeMedallion(medallion) {
  // if (medallion.style['color'] === 'blue') {
  // medallion.style['color'] = colors[Math.floor(Math.random() * 5 + 1 )];
  // } else {
  //   medallion.style['color'] = "blue"
  // }
  medallion.style.color = colors[Math.floor(Math.random() * 5 + 1 )];
  // medallion.style.display = "none";
  console.log(medallion.children);
  for (var i = 0; i < medallion.children.length; i++) {
    if (i !== 0) {
      if (medallion.children[i].style.display === "none") {
        medallion.children[i].style.display = "block";
      } else {
        medallion.children[i].style.display = "none";
      }
    }
  }
}

function modelOnly() {
  var modelyear = document.getElementsByClassName("model_year");
  // console.log(modelOnly);
  for (var i = 0; i < modelyear.length; i++) {
    var model = modelyear[i];
    console.log(model.innerHTML.indexOf("2012"));
    if (model.innerHTML.indexOf("2012") !== -1) {
      model.style.display = "block";
    } else {
      model.style.display = "none";
    }
  }
}


// fetch('https://data.cityofnewyork.us/resource/7drc-shp9.json').then(function(response) { 
//   // Convert to JSON
//   return response.json();
// }).then(function(j) {
//   // Yay, `j` is a JavaScript object
//   console.log(j); 
// });