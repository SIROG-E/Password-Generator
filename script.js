 console.log("Password Generator");

// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



