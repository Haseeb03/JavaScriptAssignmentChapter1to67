document.write("<h3>Question1</h3>");
document.write("<p>Create signup form and display form data </p>");
document.write('<form> <b>E-mail: </b> <input type = "email" id = "mail"> <br/> <b>Password: </b> <input type = "password" id = "pwd"> </form>');
document.write("<button type = 'button' onClick = 'showData()'> Signup </button> <br/> Form Data: <p><span id = 'displaymail'> </span> </p> <p> <span id = 'displayPwd'> </span></p>");
function showData() {
	document.getElementById('displaymail').innerHTML = document.getElementById("mail").value;
	document.getElementById('displayPwd').innerHTML = document.getElementById("pwd").value;
			
}
// document.write("<input id='base' placeholder='Base value'>");
// document.write("<input id='power' placeholder='Exponent value'>");
// document.write("<p id='result'></p>");
// document.write("<button type='submit' onclick='CalculatePower()'>Calculate</button>");
// function CalculatePower() {
//     var b = document.getElementById("base").value;
//     var p = document.getElementById("power").value;
//     var result;
//     result = Power(b, p);
//     document.getElementById("result").innerHTML = b + " power " +p+ " = " + result;
// }


document.write("<h3>Question2</h3>");


document.write("<h3>Question3</h3>");
