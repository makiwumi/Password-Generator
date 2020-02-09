// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthOpt = document.querySelector("#length");
var upperOpt = document.querySelector("#uppercase");
var lowerOpt = document.querySelector("#lowercase");
var numbersOpt = document.querySelector("#numbers");
var synbolOpt = document.querySelector("#symbols");

// Generate functions

let randomFunctions = {
  upper: addNumber,
  lower: addLower,
  number:addNumber,
  symbol: addSymbol
};

  //26 letters in alphabet. charcode uppercase # is 65 - 90

  function addUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  console.log(addUpper());
    //charcode lowercase # 97 - 122
  
  function addLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  console.log(addLower());
  
    // charcode for number 48 - 57
  
  function addNumber(){
    return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
  }
  console.log(addNumber());
  
    //use string from symbols on top row "~!@#$%^&*()_+"
  
  function addSymbol(){
    let symbols = "!@#$%^&*()_+";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  console.log(addSymbol());

  // prompt user for options
function askOptions(){
  let length = parseInt (
    prompt('How many characters should your password be?'));
  
  if(length < 8) {
    alert('Password length must be at least 8 characters long');
    return;
  }
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
console.log(writePassword);
}

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
