var generateBtn = document.querySelector("#generate");

function writePassword(passLength, low, up, num, sym) {
  var passOutcome = [];
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
  var upperCase = [
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
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
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

  if (low) {
    passOutcome.push(lowCase);
  }
  if (up) {
    passOutcome.push(upperCase);
  }
  if (num) {
    passOutcome.push(number);
  }
  if (sym) {
    passOutcome.push(symbol);
  }
  for (var i = 0; i < passLength; i++) {
    var passwordText =
      passOutcome[Math.floor(Math.random() * passOutcome.length)];
  }
  window.alert(passwordText);
}

function chooseLength() {
  var passLength = window.prompt("Enter a number between 8 and 128.");
  while (passLength < 8 || passLength > 128) {
    window.alert("Choose a valid number between 8 and 128.");
    chooseLength();
  }
  chooseType(passLength);
}

function chooseType(passLength) {
  var passLowcase = window.confirm("Do you want lowercase?");
  var passUpcase = window.confirm("Do you want uppercase?");
  var passNum = window.confirm("Do you want numbers?");
  var passSymbol = window.confirm("Do you want symbols?");
  writePassword(passLength, passLowcase, passUpcase, passNum, passSymbol);
}

generateBtn.addEventListener("click", chooseLength);
