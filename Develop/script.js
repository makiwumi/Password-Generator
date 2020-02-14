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

let results = document.getElementById("password");

generate.onclick = function(){
  getLength();
  getUpper();
  getNumber();
  getSym();

  results.innerHTML = generatePassword(addUpper,addLower,addNumber,addSymbols, length);
};
//print password

function generatePassword(getUpper, hasLower, hasNumber, hasSym, length){
  let generatesPassword = '';

  let typesCount = getUpper + hasLower + hasNumber + hasSym;

  let typesArr = [{getUpper}, {hasLower}, {hasNumber}, {hasSym}].filter(item => Object.values(item)[0]);

  if(typesCount === 0){
    alert("Your password must include on character type");
    return;
  }

  for (let i = 0; i< length; i+=typesCount){
    typesArr.forEach(type =>{
      let btn = Object.keys(type)[0];

      generatesPassword+= ranbtn[btn]();
    });
  }
  console.log(generatesPassword);
}


getLength = function (){
  let length = prompt("How many characters would you like your password to be?");
  console.log(length);
  
  if (length < 8){
    prompt("Your characters should be more than 8");
  }
  if (length > 128){
    prompt("Your characters should be 128");
  }
  return length;
}

getUpper = function(){
  let hasUpper = confirm("Click OK to confirm including uppercase characters");
  console.log(hasUpper);
}
getLower = function(){
  let hasLower = confirm("Click OK to confirm including lowercase characters");
  console.log(hasLower);
}
getNumber = function(){
  let hasNumber = confirm("Click OK to confirm including numeric characters");
  console.log(hasNumber);
}
getSym = function(){
  let hasSym = confirm("Click OK to confirm including special characters");
  console.log(hasSym);
}

if (getUpper === false && getLower === false && getNumber === false && getSym === false) {
  alert('Your password must include on character type');
  
}


//print password


//create options array, push all options in "let option = [fjakjfka]"

//rewrite line 61, to grab a random character from options array

//try in for loop "password+= addUpper etc"