// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
  console.log(" Button was clicked");

  // 1.presented with a series of prompts for password criteria
  //   a.Confirm whether or not to include lowercase, uppercase, numeric values
  //   b. Confirm special characters

  // 2. Input should be validated and at least one character type should be selected
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
