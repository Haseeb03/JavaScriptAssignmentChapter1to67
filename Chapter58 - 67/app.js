document.write("<h3>Question1</h3>");
document.write("<p>Calculate Power</p>");
document.write("<input id='base' placeholder='Base value'>");
document.write("<input id='power' placeholder='Exponent value'>");
document.write("<p id='result'></p>");
document.write("<button type='submit' onclick='CalculatePower()'>Calculate</button>");
function CalculatePower() {
    var b = document.getElementById("base").value;
    var p = document.getElementById("power").value;
    var result;
    result = Power(b, p);
    document.getElementById("result").innerHTML = b + " power " +p+ " = " + result;
}


document.write("<h3>Question2</h3>");

