document.write("<h3>Question1</h3>");
document.write("<p>Create signup form and display form data </p>");
document.write('<form> <b>E-mail: </b> <input type = "email" id = "mail"> <br/> <b>Password: </b> <input type = "password" id = "pwd"> </form>');
document.write("<button type = 'button' onClick = 'showData()'> Signup </button> <br/> Form Data: <p><span id = 'displaymail'> </span> </p> <p> <span id = 'displayPwd'> </span></p>");
function showData() {
	document.getElementById('displaymail').innerHTML = document.getElementById("mail").value;
	document.getElementById('displayPwd').innerHTML = document.getElementById("pwd").value;
			
}


document.write("<h3>Question2</h3>");
document.write("<p>Display full text when click on read more</p>");
document.write("<p id='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <a onClick='fullParagraph();'> <small>Click for more...</small> </a> </p>");
function fullParagraph() {
    var completeParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    document.getElementById("paragraph").innerHTML = completeParagraph;
}


document.write("<h3>Question3</h3>");
document.write("<p>Create a form for student details and show student detail in table, each row of table must contain delete and edit button</p>");
function createForm() {
    document.write("<form action = '#' onsubmit = 'Form()' id = 'form'><input id = 'name' type = 'text' placeholder = 'Name'><input id = 'class' type = 'text' placeholder = 'Class'><input id = 'rollNumber' type = 'text' placeholder = 'Roll Number'><input type = 'submit' value = 'Submit' ></form>");
}
function Form() {
    var name = document.getElementById('name').value;
    var classN = document.getElementById('class').value;
    var rollNumber = document.getElementById('rollNumber').value;
    var row = (`<tr id='${rollNumber}'><td>${name}</td><td>${classN}</td><td>${rollNumber}</td><td><button onclick='deleteRow(${rollNumber})'>Delete</button></td><td><button onclick='EditRow(${rollNumber})'>Edit</button></td></tr>`);
    table.insertAdjacentHTML('beforeend', row)
    form.reset();
}
function Html() {
    document.write(`<table><thead><tr><th>Name</th><th>Class</th><th>Roll Number</th><th>Action</th></tr></thead><tbody id='table'></tbody></table>`);
}
function deleteRow(i) {
    var row = document.getElementById(i);
    row.parentNode.removeChild(row);
}

function EditRow(i) {
    // var roww = document.getElementById(i);
    // var x = document.getElementById(i).parentNode.nodeType;
    // document.getElementById("demo").innerHTML = x;
}
createForm();
Html();
// document.write('<p id="demo"></p>');