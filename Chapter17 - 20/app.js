document.write("<h3>Question1</h3>");
var MultiDimenArr=[[],[],[]];
document.write("<h3>Question2</h3>");
var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(var j=0;j<matrix.length;j++){
    for(var i=0;i<4;i++){
        document.write(matrix[j][i]+" ");
    }
    document.write("<br>");
}
document.write("<h3>Question3</h3>");
for(var a=1;a<=10;a++){
    document.write("<br>"+a);
}
document.write("<h3>Question4</h3>");
var table=+prompt("Enter number to print table");
var len=+prompt("Enter length of Table");
// document.write(table,len);
for(var t=1; t<=len; t++){
    document.write(+table+" x "+t+" = "+(table*t)+"<br>");
}
document.write("<h3>Question5</h3>");
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var f=0;f<fruits.length;f++){
    document.write("<br>"+fruits[f]);
}
for(f=0;f<fruits.length;f++){
    document.write("<br>Element at index "+f+" is "+fruits[f]);
}
document.write("<h3>Question6</h3>");
arr_counts = [];
for (var i = 1; i < 16; i++) {
  arr_counts.push(i);
}
document.write("Counting: ${arr_counts} <br>");

arr_reverse = [];
for (var i = 1; i < 11; i++) {
  arr_reverse.push(i);
}
document.write("Reverse Counting: ${arr_reverse} <br>");

arr_even = [];
for (var i = 0; i < 21; i += 2) {
  arr_even.push(i);
}
document.write("Even: ${arr_even} <br>");

arr_odd = [];
for (var i = 1; i < 21; i += 2) {
  arr_odd.push(i);
}
document.write("Odd: ${arr_odd} <br>");

arr_series = [];
for (var i = 2; i < 21; i += 2) {
  arr_series.push(i+"K");
}
document.write(`Series: ${arr_series} <br>`);
document.write("<h3>Question7</h3>");
A = ['"cake"', "apple pie", "cookie", "chips", "patties"];
user_search = prompt("Welcome to ABC Bakery. What do you want to order?");
for (let i = 0; i < A.length; i++) {
  if (user_search == A[i]) {
    alert("${A[i]} is available at index ${A.indexOf(A[i])} in our bakery");
    break;
  }
  else{
      alert("We are sorry "+user_search+" is not available in our bakery")
  }
}
document.write("<h3>Question8</h3>");
var A = [24, 53, 78, 91, 12],greater;
for(var c=0;c<A.length;c++){
    for(var d=0;d<A.length;d++){
        if(A[c]>A[d]){
            greater=A[c];
        }
    }
}
document.write("Array Items: "+A+"<br>The largest number is "+greater)
document.write("<h3>Question9</h3>");
var A = [24, 53, 78, 91, 12],smaller;
for(var c=0;c<A.length;c++){
    for(var d=0;d<A.length;d++){
        if(A[c]<A[d]){
            smaller=A[c];
        }
    }
}
document.write("Array Items: "+A+"<br>The smallest number is "+smaller)
document.write("<h3>Question10</h3>");
for(var g=5;g<=100;g=g+5){
    document.write(g+",");
}