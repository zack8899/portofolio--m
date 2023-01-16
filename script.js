function myFunction() {
    var x = document.getElementById("menue");
    var xmark = document.getElementById("xmark");
    var bars = document.getElementById("bars");
    if (x.style.display === "none") {
      x.style.display = "flex";
      if (xmark.style.display === "none"){
        xmark.style.display === "block"
      }
      else{
        xmark.style.display === "none"
      }
    } else {
      x.style.display = "none";
    }
  }