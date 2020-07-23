document.write("<h3>Question1</h3>");
document.write("<h3>(i)</h3>");
var mc = document.getElementById("main-content");
document.write(mc);
document.write("<h3>(ii)</h3>");
var mc = document.getElementById("main-content");
for (let i = 0; i < mc.children.length; i++) {
    document.write("Child node"+i+": "+mc.children[i].tagName+"</br>");
}


document.write("<h3>(iii)</h3>");
var rander = document.getElementsByClassName("render");
for (let i = 0; i < rander.length; i++) {
    document.write("<br>Render Class items: "+rander[i].innerHTML);
}


document.write("<h3>(iV)</h3>");
var firstName = document.getElementById("first-name").value = "Muhammad";
document.write(firstName+"<br>");


document.write("<h3>(V)</h3>");
var lastName = document.getElementById("last-name").value = "Haseeb";
var email = document.getElementById("email").value = "m.haseeb5678@gmail.com";
document.write(lastName+"<br>");
document.write(email+"<br>");

document.write("<h3>Question2</h3>");
document.write("<h3>(i)</h3>");
var typeOfNode = document.getElementById("form-content").nodeType
document.write("Node type of  element having id “form-content”: " + typeOfNode + "<br>");


document.write("<h3>(ii)</h3>");
var childType = document.getElementById("last-name").nodeType
var checkType = document.getElementById("email").nodeType
document.write(childType+"<br>");
document.write(checkType+"<br>");


document.write("<h3>(iii)</h3>");
var title = document.getElementById("lastName");


document.write("<h3>(iv)</h3>");
var FirstChild = document.getElementById("main-content").firstChild.innerHTML;
var LastChild = document.getElementById("main-content").lastChild.innerHTML;
document.write('<br />' + "First Child:- " + LastChild + "<br>");
document.write("Last Child:- " + LastChild+"<br>");


document.write("<h3>(v)</h3>");
// var NextSibling = document.getElementById("lastName").nextSibling.innerHTML;
// var PreviousSibling = document.getElementById("lastName").previousSibling.innerHTML;
// document.write(NextSibling+"<br>");
// document.write(PreviousSibling+"<br>");


document.write("<h3>(vi)</h3>");
var pNode = document.getElementById("email").parentNode;
// document.write(pNode.innerHTML+"<br>");
document.write(pNode+"<br>");
var nType=pNode.nodeType;
document.write(nType+"<br>");




