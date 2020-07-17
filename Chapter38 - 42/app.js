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
document.write("<p>Calculate Average and Percentage of three Subjects</p>");
document.write("<p>Subject1: <input id = 'sub1'/></p>");
document.write("<p>Subject2: <input id = 'sub2'/></p>");
document.write("<p>Subject3: <input id = 'sub3'/></p>");
document.write("<button type='submit' onclick='Main()'>Calculate</button>");
document.write("<p id='averageResult'></p>");
document.write("<p id='percentageResult'></p>");
function Main() {
    var sub1 = Number(document.getElementById("sub1").value);
    var sub2 = Number(document.getElementById("sub2").value);
    var sub3 = Number(document.getElementById("sub3").value);
    var avg = average(sub1 ,sub2 ,sub3);
    var percent = percentage(sub1, sub2, sub3);
    document.getElementById("averageResult").innerHTML ="Average: " + avg ;
    document.getElementById("percentageResult").innerHTML ="Percentage: " + percent +"%";
}
function average(sub1, sub2, sub3) {
    var average = (sub1 + sub2 + sub3) / 3;
    console.log(average);
    return average;
}
function percentage(sub1, sub2, sub3) {
    var percentage = (sub1 + sub2 + sub3) * 100 / 300;
    return percentage;
}


document.write("<h3>Question5</h3>");
document.write("<p>Create indexOf() function</p>");
document.write("<p>Write a sentence: <input id = 'sentence'/></p>");
document.write("<p>Write a word to be found: <input id = 'word'/></p>");
var strng = document.getElementById("sentence").value;
var findStrng = document.getElementById("word").value;
document.write("<button type='submit' onclick='indexOf()'>Find</button>");
document.write("<p id='indexOfResult'></p>");
function indexOf() {
    for (var i = 0; i < strng.length; i++) {
        for (var j = 0; j < findStrng.length; j++) {
            if (strng[i + j] !== findStrng[j]) {
                break;
            }
            if (j === findStrng.length - 1) {
                return i;
            }
        }
    }
     return -1;
 }
 document.getElementById("indexOfResult").innerHTML = findStrng + " found at index " + indexOf() + " in this sentence: " +strng;


document.write("<h3>Question6</h3>");

document.write("<h3>Question7</h3>");

document.write("<h3>Question8</h3>");

document.write("<h3>Question9</h3>");

document.write("<h3>Question10</h3>");
