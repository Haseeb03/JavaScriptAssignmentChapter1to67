document.write("<h3>Question1</h3>");
document.write("<h3>(i)</h3>");
var mc = document.getElementById("main-content");

document.write("<h3>(ii)</h3>");
// document.write("<br><br>All Child nodes are: "+mc.childNodes);

document.write("<h3>(iii)</h3>");
var rander = document.getElementsByClassName('render');
for (let i = 0; i < rander.length; i++) {
    document.write('<br><br>Render Class items: '+rander[i].innerHTML);
}



document.write("<h3>Question2</h3>");

