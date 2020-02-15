let addUpper = ['A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z'];
console.log(addUpper);

let addLower = ['a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z'];

let addNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let addSym = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
function generateOptions(){
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
  var passwordOptions = {
    length: length,
    uppers: uppers,
    lowers: lowers,
    numbers: numbers,
    symbols: symbols
  };

  return passwordOptions;
}


function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = generateOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.uppers) {
    possibleCharacters = possibleCharacters.concat(addUpper);
    guaranteedCharacters.push(getRandom(addUpper));
  }
  if (options.lowers) {
    possibleCharacters = possibleCharacters.concat(addLower);
    guaranteedCharacters.push(getRandom(addLower));
  }
  if (options.numbers) {
    possibleCharacters = possibleCharacters.concat(addNumber);
    guaranteedCharacters.push(getRandom(addNumber));
  }
  if (options.symbols) {
    possibleCharacters = possibleCharacters.concat(addSym);
    guaranteedCharacters.push(getRandom(addSym));
  }
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
  
}

var generateBtn = document.querySelector('#generate');


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);

