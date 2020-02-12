let addUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);


let addLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);


let addNumber = String.fromCharCode(Math.floor(Math.random()* 10) + 48);


let addSymbols = ['!','@','#','$','%','^','&','*','(',')','_','+']; 


let length = prompt('How many character would you like your password to be?');


  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (length === true) {
    alert('Password length must be provided as a number');
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return;
  }
