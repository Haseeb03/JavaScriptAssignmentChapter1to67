//Q1 js
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}


//Q2 js
function zoomOut(){
  var paragraph=document.getElementById("paragraph");
  var style = window.getComputedStyle(paragraph, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style); 
  paragraph.style.fontSize = (fontSize - 10) + 'px';
}
function zoomIn(){
  var paragraph=document.getElementById("paragraph");
  // paragraph.style.fontSize = "20px";
  var style = window.getComputedStyle(paragraph, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style); 
  paragraph.style.fontSize = (fontSize + 10) + 'px';
}