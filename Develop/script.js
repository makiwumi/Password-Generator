let addUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);


let addLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);


let addNumber = String.fromCharCode(Math.floor(Math.random()* 10) + 48);


let addSymbols = ['!','@','#','$','%','^','&','*','(',')','_','+']; 


function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );
  }