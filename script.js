// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// TODO: Write code so the generatePassword returns a string for a password
// which meets the requirements in the instructions.
function generatePassword() {

  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  var specialCharacterArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", ",", "^", '_', "`", "{", "|", "}", "~"];
  
  var megaArrayGun = [];

  var randomPass = "";


  // Ask the user how long they would want their password length
  var characterLengthSelect = prompt("How long would you like your password?\n Must be between 8 and 128 long.");

  // If they choose something other than the accepted range
  while (characterLengthSelect < 8 || characterLengthSelect > 128) {
    // Then they need to be prompted to choose an acceptable number
    characterLengthSelect = prompt("Please choose a length between 8 and 128 characters");
  }

  // // Ask the user if they want lowercase characters
  var lowerCaseSelect = confirm("Click confirm for lowercase characters");
  
  if (lowerCaseSelect === true) {
    megaArrayGun = megaArrayGun.concat(lowerCaseArray);
  }

  // Ask the user if they want uppercase characters
  var upperCaseSelect = confirm("Click confirm for uppercase characters");

  if (upperCaseSelect === true) {
    megaArrayGun = megaArrayGun.concat(upperCaseArray);
  }

  // // Ask if the user wants numeric characters
  var numericSelect = confirm("Click confirm for numeric characters");

  if (numericSelect === true) {
    megaArrayGun = megaArrayGun.concat(numericArray);
  }
  
  // Ask if the user wants special characters
  var specialCharacterSelect = confirm("Click confirm for special characters");

  if (specialCharacterSelect === true) {
    megaArrayGun = megaArrayGun.concat(specialCharacterArray);
  }

  // IF all options are false
  if (lowerCaseSelect === false && upperCaseSelect === false && numericSelect === false && specialCharacterSelect === false) {
    alert("Could not generate password with no selectors!");
    alert("Please choose one option to generate a password");
    
  } else {

    // Loops as many times as the password length is
    for (var i = 0; i < characterLengthSelect; i++) {
      var randomItem = megaArrayGun[Math.floor(Math.random()*megaArrayGun.length)];
      randomPass = randomPass += randomItem;
      }
      return randomPass
  }

 
}

