let addUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
console.log(addUpper);

let addLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
console.log(addLower);

let addNumber = String.fromCharCode(Math.floor(Math.random()* 10) + 48);
console.log(addNumber);

let addSymbols = ['!','@','#','$','%','^','&','*','(',')','_','+']; 
console.log(addSymbols);

let length = 0

let password = "";

generate.onclick = function(){
  getLength();
  getUpper();
  getNumber();
  getSym();
  };

getLength = function (){
  let length = prompt("How long would you like your password to be?");
  console.log(length);
  
  if (length < 8){
    prompt("Your characters should be more than 8");
  }
  if (length > 128){
    prompt("less than 128");
  }
  return length;
}

getUpper = function(){
  let haveUpper = confirm("have upper?");
  console.log(haveUpper);
}
getLower = function(){
  let haveLower = confirm("have lower");
  console.log(haveLower);
}
getNumber = function(){
  let haveNumber = confirm("have num");
  console.log(haveNumber);
}
getSym = function(){
  let haveSym = confirm("have sym");
  console.log(haveSym);
}

function generate(){
  let options = [];
  if haveUpper == true;
    options.push(addUpper)

}
for (var i; i < length; i++){
  password+= option;
}

//print password
document.getElementById("password").innerHTML = password;

//create options array, push all options in "let option = [fjakjfka]"

//rewrite line 61, to grab a random character from options array

//try in for loop "password+= addUpper etc"