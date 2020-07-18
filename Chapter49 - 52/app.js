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
<div>
      <p id="expandThePara">
         Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus.
         <a href="javascript:void(0);" onClick="expandLoris();"><em>Click for more.</em></a>
      </p> 
     </div>


document.write("<h3>Question3</h3>");
