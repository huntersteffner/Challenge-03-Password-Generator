// Assignment Code
// HTML elements
const generateBtn = document.querySelector("#generate");
const characterID = document.getElementById('characters')
const numberID = document.getElementById('numbers')
const upperID = document.getElementById('uppercase')
const lowerID = document.getElementById('lowercase')
const specialID = document.getElementById('special-characters')

// Variables
let validCharacters
let password = ''


// character types
const numberCharacters = '0123456789'
const upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz'
const specialCharacters = '!@#$%^&*()-_=+<>'

const passwordLengthPrompt = function () {
  let output = prompt('Enter desired password length, between 1-128 characters.')
  outputNum = parseInt(output)
  return outputNum
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}




// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

const btnClick = generateBtn.addEventListener("click", function(e) {
  let characterTotal = parseInt(characterID.value)
  let passwordLength
  if (characterTotal >= 7  && characterTotal <= 128) {
    passwordLength = characterTotal
  } else {
    alert ('Invalid range')
  }
  // Check to see if numbers are accepted
  if (numberID.checked = true) {
    validCharacters += numberCharacters
  }
  // Check to see if uppercase is accepted
  if (upperID.checked = true) {
    validCharacters += upperCharacters
  }
  // Check to see if lowercase is accepted
  if (lowerID.checked = true) {
    validCharacters += lowerCharacters
  }
  // Check to see if special characters are accepted
  if (specialID.checked = true) {
    validCharacters += specialCharacters
  }

  console.log(validCharacters)


  // for (let i = 0; i <= passwordLength; i++) {
  //   let randomNumber = Math.floor(Math.random() * validCharacters.length - 1)
  //   password += validCharacters.substring(randomNumber,randomNumber + 1)
  // }
  // console.log(password)
});

