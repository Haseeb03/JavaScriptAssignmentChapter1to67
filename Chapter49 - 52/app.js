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
    var expandedParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    document.getElementById("paragraph").innerHTML = expandedParagraph;
}


document.write("<h3>Question3</h3>");
