var user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);
document.getElementByID("Welcome").innerHTML = "Hello, Welcome" + user_name + "!";
