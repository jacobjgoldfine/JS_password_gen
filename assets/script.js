// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

function chooseLength() {
var passLength = window.prompt("Enter a number between 8 and 128.");
passLength
chooseType();
}


function chooseType() {
  var passType = window.prompt("Enter lowercase, uppercase, numeric, and/or special.")
  writePassword();
}




// Add event listener to generate button
generateBtn.addEventListener("click", chooseLength);

