document.write("<h3>Question1</h3>");
// document.write("<p>Calculate Power</p>");
// document.write("<input id='base' placeholder='Base value'>");
// document.write("<input id='power' placeholder='Exponent value'>");
// document.write("<p id='result'></p>");
// document.write("<button type='submit' onclick='CalculatePower()'>Calculate</button>");
// function CalculatePower() {
//     var b = document.getElementById("base").value;
//     var p = document.getElementById("power").value;
//     var result;
//     result = Power(b, p);
//     document.getElementById("result").innerHTML = b + " power " +p+ " = " + result;
// }
document.write("<a href='#' onclick='Link()'> Please click this link </a>");
function Link() {
    alert("Thank you for clicking");
}


document.write("<h3>Question2</h3>");
document.write("<h4> Mobile Phone lookup </h4>");
document.write("<div class='moblie'> <img src='images/m1.png' onclick='message()'> <p> Tecno Spark 4 </p> </div>");
document.write("<div class='moblie'> <img src='images/m2.png' onclick='message()'> <p> Nokia 7.2 </p> </div>");
document.write("<div class='moblie'> <img src='images/m3.png' onclick='message()'> <p> Samsumg Galaxy Note 10 </p> </div>");
document.write("<div class='moblie'> <img src='images/m4.png' onclick='message()'> <p> Huawei Honor 9N </p> </div>");
function message(){
    alert('Thanks for purchasing a phone from us');
}

document.write("<h3>Question3</h3>");
document.write("<table id='myTable'>");
document.write("<tr><th> index  </th><th> name </th><th> class </th> </tr>");
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



document.write("<h3>Question5</h3>");
