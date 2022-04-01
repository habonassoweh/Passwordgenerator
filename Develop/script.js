// Assignment code here
// 1.Presented with a series of prompts for password criteria
//   a.Confirm whether or not to include lowercase, uppercase, numeric values
//   b. Confirm special characters
// 2. Input should be validated and at least one character type should be selected
// 3. Then password is generated that matches the selected criteria
// 4. Then he password is either displayed in an alert or written to the page

var finalPassword = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log(" Button was clicked");

  var generate = [];

  var passwordLengthPrompt = parseInt(
    window.prompt(" How long would you like your password to be?")
  );
  if (passwordLengthPrompt < 8) {
    window.alert("Password must be at least 8 characters long ");
    return null;
  }
  if (passwordLengthPrompt > 128) {
    window.alert("Password can not be greater than 128 charcters");
    return null;
  }
  if (isNaN(passwordLengthPrompt)) {
    window.alert("Answer invalid, try again");
    return null;
  }
  var passwordLowercasePrompt = window.confirm(
    " Would you like to include lower case?"
  );

  var passwordUppercasePrompt = window.confirm(
    " Would you like to include upper case?"
  );

  var passwordSpecialPrompt = window.confirm(
    " Would you like to include special characters?"
  );

  var passwordNumberPrompt = window.confirm(
    " Would you like to include numbers?"
  );
  if (
    passwordSpecialPrompt === false &&
    passwordLowercasePrompt === false &&
    passwordUppercasePrompt === false &&
    passwordNumberPrompt === false
  ) {
    window.alert(
      "Password must include at least 1 charcter set to generate password"
    );
  }
  if (passwordSpecialPrompt) {
    for (let i = 0; i < 22; i++) {
      generate.push(getRandomSpecial());
    }
    console.log(generate);
  }
  if (passwordLowercasePrompt) {
    for (let i = 0; i < 26; i++) {
      generate.push(getRandomLower());
    }
  }
  if (passwordUppercasePrompt) {
    for (let i = 0; i < 26; i++) {
      generate.push(getRandomUpper());
    }
  }
  if (passwordNumberPrompt) {
    for (let i = 0; i < 10; i++) {
      generate.push(getRandomNumber());
    }
    console.log(generate);
  }
  function randomIndex() {
    var randomEl = generate[Math.floor(Math.random() * generate.length)];
    return randomEl;
  }
  for (let i = 0; i < passwordLengthPrompt; i++) {
    finalPassword.push(randomIndex(generate));
  }

  //return "Generated password will go here";
  return finalPassword.join("");
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSpecial() {
  const special = "!@#$%^&*(){}[]=+<>/,.";
  return special[Math.floor(Math.random() * special.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
