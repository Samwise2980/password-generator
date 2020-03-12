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

  // Ask the user how long they would want their password length
  var characterLengthSelect = prompt("How long would you like your password?\n Must be between 8 and 128 long.");

  // If they choose something other than the accepted range
  while (characterLengthSelect < 8 || characterLengthSelect > 128 || characterLengthSelect == "string") {
    // Then they need to be prompted to choose an acceptable number
    characterLengthSelect = prompt("Please choose a length between 8 and 128 characters");
  }

  // Ask the user if they want lowercase characters
  var lowerCaseSelect = confirm("Click confirm for lowercase characters");


  // Ask the user if they want uppercase characters
  var upperCaseSelect = confirm("Click confirm for uppercase characters");


  // Ask if the user wants numeric characters
  var numericSelect = confirm("Click confirm for numeric characters");

  
  // Ask if the user wants special characters
  var specialCharacterSelect = confirm("Click confirm for special characters");


  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  var specialCharacterArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", ",", "^", '_', "`", "{", "|", "}", "~"];
  
  // I need to pull each array that the user has chosen
  function arrayGet() {
    //switch cases???
  }

  // I need to create a line that has the length of each array chosen added up to a final number


  // I need to create a mega array of each of the chosen arrays
  

  // I need to create a Math.random line that pulls from the mega array using the length from the total array length


  // I need to make a loop as many times as the password length is
  // for (var i = 0; i < characterLengthSelect; i++) {

  // }

  var randomPass = Math.random().toString(36).substr(2, 8);
  return randomPass;
}

// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
