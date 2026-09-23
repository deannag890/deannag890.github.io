/*var user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);
document.getElementByID("Welcome").innerHTML = "Hello, Welcome" + user_name + */
function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";
// a prompt box is used to prompt users to input a value before editing a page.
  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
  return message
}
