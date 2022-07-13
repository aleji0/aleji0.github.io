var characterLength = 8;
var choices = [];

var specialCharacters = [
  "`",
  "~",
  "!",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "|",
  "]",
  "}",
  "]",
  "{",
  "'",
  "'",
  ";",
  ":",
  "?",
  "/",
  ">",
  "<",
  ".",
  ",",
];

var lowerCase = [
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

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword); //start

function writePassword() {
  //defines writePassword function
  var correctPrompts = getPrompts(); //calls getPrompts function

  if (correctPrompts) {
    var newPassword = createPassword();
    console.log(newPassword);
    var passwordElement = document.getElementById("password");
    console.log(correctPrompts);
    passwordElement.value = newPassword;
  } else {
    alert("Must select at least one character type");
  }
}

function getPrompts() {
  choices = [];
  characterLength = parseInt(
    prompt("How many characters should your password contain?")
  );

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert(
      "Character length has to be at least 8 characters, and cannot be greater than 128 characters."
    );
    return false;
  }
  if (confirm("Would you like special characters in your password?")) {
    choices = choices.concat(specialCharacters);
  }
  if (confirm("Would you like lower case characters in your password?")) {
    choices = choices.concat(lowerCase);
  }
  if (confirm("Would you like upper case characters in your password?")) {
    choices = choices.concat(upperCase);
  }
  if (confirm("Would you like numeric characters in your password?")) {
    choices = choices.concat(numbers);
  }
  if (choices.length) {
    return true;
  }
  return false;
}

function createPassword() {
  var password = ""; //empty string
  console.log("Got into createPassword function");
  console.log(characterLength);
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choices.length);
    password = password + choices[randomIndex];
    console.log("In the for loop");
  }
  return password;
}
