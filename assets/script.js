// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength =
  // Write password to the #password input
  function writePassword(low, up, num, sym) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    var lowCase = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    var uppercase = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var symbol = [
      "!",
      '"',
      "#",
      "$",
      "%",
      "&",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "?",
      "@",
      "[",
      "]",
      "^",
      "_",
      "`",
      "{",
      "|",
      "}",
      "~",
    ];
    var x = x[Math.floor(Math.random() * x.length)];
    passwordText.value = password;
  };

function chooseLength() {
  var passLength = window.prompt("Enter a number between 8 and 128.");
  passLength;
  while (passLength < 8 || passLength > 128) {
    window.alert("Choose a valid number between 8 and 128.");
    chooseLength();
  }
  chooseType();
}

function chooseType() {
  var passLowcase = window.confirm("Do you want lowercase?");
  var passUpcase = window.confirm("Do you want uppercase?");
  var passNum = window.confirm("Do you want numbers?");
  var passSymbol = window.confirm("Do you want symbols?");
  writePassword(passLowcase, passUpcase, passNum, passSymbol);
}

// Add event listener to generate button
generateBtn.addEventListener("click", chooseLength);
