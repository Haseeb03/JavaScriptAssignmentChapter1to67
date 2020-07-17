document.write("<h3>Question1</h3>");
document.write("<p>Calculate Power</p>");
document.write("<input id='base' placeholder='Base value'>");
document.write("<input id='power' placeholder='Exponent value'>");
document.write("<button type='submit' onclick='CalculatePower()'>Calculate</button>");
document.write("<p id='result'></p>");
function CalculatePower() {
    var b = document.getElementById("base").value;
    var p = document.getElementById("power").value;
    var result;
    result = Power(b, p);
    document.getElementById("result").innerHTML = b + " power " +p+ " = " + result;
}

function Power(b, p) {
    var i, power = 1;

    for (i = 0; i < p; i++) {
        power = power * b;
    }
    return power;
}


document.write("<h3>Question2</h3>");
document.write("<p>Check Leap Year</p>");
document.write("<input id = 'year'/>");
document.write("<button type='submit' onclick='CheckLeapYear()'>Check</button>");
document.write("<p id='leapResult'></p>");
function CheckLeapYear() {
    var year = document.getElementById("year").value;
    if((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)){
        document.getElementById("leapResult").innerHTML = year+" is a leap year";
    }
    else{
        document.getElementById("leapResult").innerHTML = year+" is not a leap year";
    }
}


document.write("<h3>Question3</h3>");
document.write("<p>Calculate Area of Triangle</p>");
document.write("<p>a: <input id = 'a'/></p>");
document.write("<p>b: <input id = 'b'/></p>");
document.write("<p>c: <input id = 'c'/></p>");
document.write("<button type='submit' onclick='TriangleArea()'>Calculate Area</button>");
document.write("<p id='areaResult'></p>");
function TriangleArea() {
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);
    var S=CalculateS(a,b,c);
    var area = S*(S - a)*(S - b)*(S - c);
    document.getElementById("areaResult").innerHTML ="Area of triangle: " + area ;
}
function CalculateS(a,b,c) {
    var s = (a+b+c) / 2;
    return s;
}

document.write("<h3>Question4</h3>");

document.write("<h3>Question5</h3>");

document.write("<h3>Question6</h3>");

document.write("<h3>Question7</h3>");

document.write("<h3>Question8</h3>");

document.write("<h3>Question9</h3>");

document.write("<h3>Question10</h3>");
