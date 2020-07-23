document.write("<h3>Question1</h3>");
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}


document.write("<h3>Question2</h3>");

