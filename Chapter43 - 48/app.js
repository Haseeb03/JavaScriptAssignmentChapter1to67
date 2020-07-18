document.write("<h3>Question1</h3>");
document.write("<p>Show an alert Box</p>");
document.write("<a href='#' onclick='Link()'> Please click this link </a>");
function Link() {
    alert("Thank you for clicking");
}


document.write("<h3>Question2</h3>");
document.write("<p>Show alert message on click</p>");
document.write("<h4> Mobile Phone lookup </h4>");
document.write("<center><div class='moblie'> <img src='images/m1.png' onclick='message()'> <p> Tecno Spark 4 </p> </div>");
document.write("<div class='moblie'> <img src='images/m2.png' onclick='message()'> <p> Nokia 7.2 </p> </div>");
document.write("<div class='moblie'> <img src='images/m3.png' onclick='message()'> <p> Samsumg Galaxy Note 10 </p> </div>");
document.write("<div class='moblie'> <img src='images/m4.png' onclick='message()'> <p> Huawei Honor 9N </p> </div></center>");
function message(){
    alert('Thanks for purchasing a phone from us');
}

document.write("<h3>Question3</h3>");
document.write("<p>Delete entire row by clicking on delete button</p>");
document.write("<table id='myTable'>");
document.write("<tr><th> Index  </th><th> Name </th><th> Class </th> </tr>");
document.write("<tr><td>0</td><td>Jhone</td><td> 10 </td><td><input type = 'button' value = 'Delete' onclick = 'deleteRow()' /></td></tr>");
document.write("<tr><td>1</td><td> Doe </td><td>  9 </td><td><input type = 'button' value = 'Delete' onclick = 'deleteRow()' /></td></tr>");
document.write("<tr><td>2</td><td>Mark </td><td> 10 </td><td><input type = 'button' value = 'Delete' onclick = 'deleteRow()' /></td></tr>");
document.write("<tr><td>3</td><td>James</td><td>  8 </td><td><input type = 'button' value = 'Delete' onclick = 'deleteRow()' /></td></tr>");
document.write("</table>");
function deleteRow() {
    var tabledata = event.target.parentNode;
    var tablerow = tabledata.parentNode;
	tablerow.parentNode.removeChild(tablerow);
}


document.write("<h3>Question4</h3>");
document.write("<p>Change the picture on mouseover and set the first picture on mouseout</p>");
document.write("<img src='images/m3.png' onmouseover='rollover(this)' onmouseout='mouseaway(this)' />");
function rollover(my_image){
    my_image.src = 'images/m2.png';
}
function mouseaway(my_image){
    my_image.src = "images/m3.png";
}


document.write("<h3>Question5</h3>");
document.write("<p>Increase and Decrease counter</p>");
document.write("<button type = 'button' onClick = 'increase()'> increase </button><span id = 'counter'>0</span><button type = 'button' onClick = 'decrease()'>decrease</button>");
var clicks = 0;
function increase() {
    clicks = clicks  + 1;
    document.getElementById("counter").innerHTML = clicks;
}
function decrease() {
    clicks = clicks - 1;
    document.getElementById("counter").innerHTML = clicks;		
}
