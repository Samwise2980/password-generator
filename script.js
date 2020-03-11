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
  // var characterLengthSelect = prompt("How long would you like your password?\n Must be between 8 and 126 long.");
  // var lowerCaseSelect = prompt("Would you like lowercase characters?\n yes or no");
  // var upperCaseSelect = prompt("Would you like uppercase characters?\n yes or no");
  // var numericSelect = prompt("Would like like numeric characters?\n yes or no")
  // var specialCharacterSelect = prompt("Would you like special characters?\n yes or no");

  // var specialCharacterArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", ",", "^", '_', "`", "{", "|", "}", "~"];
  
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
