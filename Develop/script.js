function generateOptions(){
  
}
var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

window.addEventListener('load', function() {
  generateNewPassword();
});

function generateNewPassword() {
  var options = generateOptions();
  var password = "";

  var allowed = {};
  if (uppers) password += allowed.addUpper;
  if (lowers) password += allowed.addLower;
  if (numbers) password += allowed.addNumber;
  if (symbols) password += allowed.addSym;

  for (var i = password.length; i < length; i++) {
    password +=Math.floor(Math.random() * allowed);
  }
  
}

document.getElementById("password").value = password

