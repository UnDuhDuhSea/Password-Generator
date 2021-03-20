// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // .value is specific to text area fields
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "1234567890"
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


function generatePassword() {
  var finalPassword = "";
  var passwordChoice = "";
  var numLetters = prompt("How many letters would you like your password to be?");

  if (numLetters > 128 || numLetters < 8) {
    alert("password length must bet between 8 and 128 characters, please try again.")
    return finalPassword;
  }

  if (confirm("Would you like lowercase?")) {
    passwordChoice += lowerCase;
  }

  if (confirm("Would you like uppercase?")) {
    passwordChoice += upperCase;
  }

  if (confirm("Would you like numeric?")) {
    passwordChoice += numeric;
  }

  if (confirm("Click OK to confirm including special characters")) {
    passwordChoice += specialChar;
  }
  //check that user chose at least 1 of the 
  if (passwordChoice < 1) {
    // create an alert for user saying that they did not pick any criteria
    alert("Please choose one of the criteria if you wish to have a password generated.")
    return finalPassword;
  }

  for (i = 0; i < numLetters; i++) {
    // randomly pick character from passwordChoice
    finalPassword += passwordChoice.charAt(Math.floor(Math.random() * passwordChoice.length));
    // concat character into finalPassword
  }
  // this will be a combination of all of the criteria in a string
  return finalPassword;
}


// Psuedo-code
// prompt() pops up which criteria should be included in generated password.
// How many characters you would like to contain 8-128 characters
  // if password length is outside of criteria alert() shows up saying "password length must be at least 8 characters"
  // clicking okay will bring user back to blank screen
  // if password above 128 alert() shows up saying it must be lower than 128
// if password length criteria "Click OK to confirm including special characters"
  // if user clicks cancel, password generator continues with NO numeric characters
// click okay to confirm special characters (@ . _ <---examples)


