 //console.log("Password Generator");

// Assignment Code
var generateBtn = document.querySelector("#generate");

//https://stackoverflow.com/questions/1497481/javascript-password-generator
//https://jsfiddle.net/
//Math.random().toString(36).slice(2)
//https://www.w3schools.com/js/js_loop_for.asp

//Reference: https://jsfiddle.net/b2av54t0/4/
function generatePassword(length, lowerCase, upperCase, numeric, specialChar) {
  var generatedPwd = "";

  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
  var forceLower = lowerCase, 
      forceUpper = upperCase,
      forceNumber = numeric,
      forceSpecial = specialChar;
  var randomSet;

  //1. create a string filled with '.' with a length of 'length'. hint: use for loop
  //2. randomly pick a character from chars with Math.Random() and Math.Floor()
  for (var i = 0, n = charset.length; i < length; ++i) {
    var randomChar;

    randomSet = Math.floor(Math.random() * 4);

    var randomNumber = Math.random();
    var charIndex = randomNumber * n;
    var index = Math.floor(charIndex);

    if (forceLower || (lowerCase && randomSet === 0)) {      
      charIndex = randomNumber * lowerChars.length;
      index = Math.floor(charIndex);
      randomChar = lowerChars.charAt(index);

      forceLower = false;
    } 
    else if (forceUpper || (upperCase && randomSet === 1)) {
      charIndex = randomNumber * upperChars.length;
      index = Math.floor(charIndex);
      randomChar = upperChars.charAt(index);

      forceUpper = false;
    } 
    else if (forceNumber || (numeric && randomSet === 2)) {
      charIndex = randomNumber * numbers.length;
      index = Math.floor(charIndex);
      randomChar = numbers.charAt(index);

      forceNumber = false;
    } 
    else if (forceSpecial || (specialChar && randomSet === 3)) {
      charIndex = randomNumber * specialCharacters.length;
      index = Math.floor(charIndex);
      randomChar = specialCharacters.charAt(index);

      forceSpecial = false;
    }
    else {      
      //force for loop one more time so that it generates all the characters
      randomChar = "";
      i--;

      console.log('random logic did not work, reset index.')
      //randomChar = charset.charAt(index);
    } 

    generatedPwd = generatedPwd + randomChar;
  }
  return generatedPwd;
}

// Write password to the #password input
function writePassword() {

  //1. prompt() to enter length of password
  var length = prompt("Enter a length between 8 and 128 characters");
  length = parseInt(length);
  console.log("length: ", length);

  //1.1 check length is between 8 and 128
  if (length >= 8 && length <= 128) {    
    //  block of code to be executed if the condition is true
    console.log(":) good length: ", length);
  } else {
    //  block of code to be executed if the condition is false
    console.log(":( bad length: ", length);
    alert("You must choose a number between 8 and 128. Please try again!"); 
    return; 
  }

  //2. confirm() lowercase
  var includeLowerCase = confirm("Include lower case letters?");
  console.log("lowerCase: ", includeLowerCase);

  //3. confirm() uppercase
  var includeUpperCase = confirm("Include upper case letters?");

  //4. confirm() numeric
  var includeNumeric = confirm("Include numbers?");

  //5. confirm() special characters
  var includeSpecialChar = confirm("Include special characters?");

  //6. validate selection
  //if lowercase is false and uppercase is false and numeric is false and special character is false
  //then alert user.
  if (includeLowerCase === false && includeUpperCase === false && includeNumeric === false && includeSpecialChar === false) {
    alert("You must select at least one type of character");
    return;
  }  

  var password = generatePassword(length, includeLowerCase, includeUpperCase, includeNumeric, includeSpecialChar);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


