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
document.write("<button type='submit' onclick='result()'>Find</button>");
document.write("<p id='indexOfResult'></p>");
var strng,findStrng;
function IndexOf() {
    strng = document.getElementById("sentence").value;
    findStrng = document.getElementById("word").value;
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
function result(){
    var indexOfAnswer=IndexOf();
    document.getElementById("indexOfResult").innerHTML = findStrng + " found at index " + indexOfAnswer + " in this sentence: " +strng;
}


document.write("<h3>Question6</h3>");
document.write("<p>Remove Vowels</p>");
document.write("<p>Write a sentence to remove Vowels: <input id = 'removevowels'/></p>");
document.write("<button type='submit' onclick='removeVowels()'>Find</button>");
document.write("<p id='WithoutVowels'></p>");
var str;
function removeVowels() {
    str = document.getElementById("removevowels").value;
    if(str.length <= 25) {
        document.getElementById("WithoutVowels").innerHTML ="Remove Vowels: " + str.replace(/[aeiou]/gi, '');
    }
    else{
        document.getElementById("WithoutVowels").innerHTML ="length is greater than 25 words";
    }	
}


document.write("<h3>Question7</h3>");
document.write("<p>count number of occurences of any two vowels</p>");
document.write("<p>Write a sentence to count number of occurences of any two vowels: <input id = 'countvowels'/></p>");
document.write("<button type='submit' onclick='Occurrences()'>Find</button>");
document.write("<p id='TwoVowels'></p>");
var count;
var vowels=[];
function Occurrences() {
    count = 0;
    var str = document.getElementById("countvowels").value;
    for(var i=0;i<str.length;i++){
        var isvowel=((str.charAt(i)).toLowerCase() + (str.charAt(i+1)).toLowerCase());
        switch(isvowel){
            case "aa":
                count++;
                vowels.push(isvowel);
                break;
            case "ea":
                count++;
                vowels.push(isvowel);
                break;
            case "ia":
                count++;
                vowels.push(isvowel);
                break;
            case "oa":
                count++;
                vowels.push(isvowel);
                break;
            case "ua":
                count++;
                vowels.push(isvowel);
                break;
            case "ae":
                count++;
                vowels.push(isvowel);
                break;
            case "ee":
                count++;
                vowels.push(isvowel);
                break;
            case "ie":
                count++;
                vowels.push(isvowel);
                break;
            case "oe":
                count++;
                vowels.push(isvowel);
                break;
            case "ue":
                count++;
                vowels.push(isvowel);
                break;
            case "ai":
                count++;
                vowels.push(isvowel);
                break;
            case "ei":
                count++;
                vowels.push(isvowel);
                break;
            case "ii":
                count++;
                vowels.push(isvowel);
                break;
            case "oi":
                count++;
                vowels.push(isvowel);
                break;
            case "ui":
                count++;
                vowels.push(isvowel);
                break;
            case "ao":
                count++;
                vowels.push(isvowel);
                break;
            case "eo":
                count++;
                vowels.push(isvowel);
                break;
            case "io":
                count++;
                vowels.push(isvowel);
                break;
            case "oo":
                count++;
                vowels.push(isvowel);
                break;
            case "uo":
                count++;
                vowels.push(isvowel);
                break;
            case "au":
                count++;
                vowels.push(isvowel);
                break;
            case "eu":
                count++;
                vowels.push(isvowel);
                break;
            case "iu":
                count++;
                vowels.push(isvowel);
                break;
            case "ou":
                count++;
                vowels.push(isvowel);
                break;
            case "uu":
                count++;
                vowels.push(isvowel);
                break;
        }
    }
    document.getElementById("TwoVowels").innerHTML ="Vowel Occurrence : " + count + " </br>" + vowels;
}


document.write("<h3>Question8</h3>");
document.write("<p>Convert km distance in  meters, feet, inches and centimeters</p>");
document.write("<p>Enter distance in km: <input id = 'distance'/></p>");
document.write("<button type='submit' onclick='mainfunction()'>Find</button>");
document.write("<p id='m'></p>");
document.write("<p id='f'></p>");
document.write("<p id='i'></p>");
document.write("<p id='cm'></p>");
function mainfunction(){
    var distance = document.getElementById("distance").value;
    document.getElementById("m").innerHTML = distance + "km = " + meter(distance) + " meters";
    document.getElementById("f").innerHTML = distance + "km = " + feet(distance) + " feets";
    document.getElementById("i").innerHTML = distance + "km = " + inch(distance) + " inches";
    document.getElementById("cm").innerHTML = distance + "km = " + centimeter(distance) + " centimeter";
    
}
function meter(m){
    var distanceInMeter = m * 1000;
    return distanceInMeter;
}
function feet(f){
    var distanceInFeet = f * 3280.84;
    return distanceInFeet;
}
function inch(i){
    var distanceInInch = i * 39370.1;
    return distanceInInch;
}
function centimeter(cm){
    var distanceInCentimeter = cm * 100000;
    return distanceInCentimeter;
}


document.write("<h3>Question9</h3>");



document.write("<h3>Question10</h3>");
