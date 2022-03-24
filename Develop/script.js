// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
  console.log(" Button was clicked");
  var passwordLengthPrompt = window.prompt(
    " How long would you like your password to be?"
  );
  console.log(passwordLengthPrompt);

  var passwordLowercasePrompt = window.confirm(
    " Would you like to include lower case?"
  );
  console.log(passwordLowercasePrompt);

  var passwordUppercasePrompt = window.confirm(
    " Would you like to include upper case?"
  );
  console.log(passwordUppercasePrompt);

  var passwordSpecialPrompt = window.confirm(
    " Would you like to include special characters?"
  );
  console.log(passwordSpecialPrompt);

  var passwordNumberPrompt = window.confirm(
    " Would you like to include numbers?"
  );
  console.log(passwordNumberPrompt);

  // 1.Presented with a series of prompts for password criteria
  //   a.Confirm whether or not to include lowercase, uppercase, numeric values
  //   b. Confirm special characters

  // 2. Input should be validated and at least one character type should be selected
  // 3. Then password is generated that matches the selected criteria
  // 4. Then he password is either displayed in an alert or written to the page
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
