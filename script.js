// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate Password

function generatePassword() {

    var numChars = "0123456789";
    var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCases = upperCases.toLowerCase();
    var specialChars = "!@#$%^&*()_-+=";
    var newPass = "";

    var passLength = Number(prompt("Type required password character length (8 - 128 chracters).", "0"));

    if (passLength >= 8 && passLength <= 128) {
        var passUpperCase = confirm("Does your password require uppercase characters?");
        var passLowerCase = confirm("Does your password require lowercase characters?");
        var passNum = confirm("Does your password require numbers?");
        var passSpe = confirm("Does your password require special characters?");

       for (i=0; i < passLength; i++) {

            if (newPass.length < passLength) {
                if (passUpperCase) {
                    newPass += upperCases[Math.floor(Math.random() * upperCases.length)];
                } if (passLowerCase) {
                    newPass += lowerCases[Math.floor(Math.random() * upperCases.length)];
                } if (passNum) {
                    newPass += numChars[Math.floor(Math.random() * numChars.length)];
                } if (passSpe) {
                    newPass += specialChars[Math.floor(Math.random() * specialChars.length)];
                }

            } else {
                break;
            }

       }

        return newPass;

    } 
    else {
        alert("ERROR: input must be a number between 8 and 128. Try again.");
        return "Try Again";
    }

}



