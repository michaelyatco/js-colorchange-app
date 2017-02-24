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