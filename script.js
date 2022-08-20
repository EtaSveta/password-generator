// Assignment code here



  function generatePassword() {
	
  var length = parseInt(window.prompt("Please choose password length between 8 and 128 characters"));
  console.log(length);
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(window.prompt("Please choose password length between 8 and 128 characters"));
  }

  var charsetLower = "abcdefghijklmnopqrstuvwxyz"; 
  var charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  var charsetNumber = "0123456789";
  var charsetSymbol = "!#$%&'()*+,-./:;<]=>?@^_`{|}~[";
  var charset = "";

  var passwordLower = window.confirm("Would you like to use LOWER case letters?");
  if (passwordLower){
    charset += charsetLower;
  }

  var passwordUpper = window.confirm("Would you like to use UPPER case letters?")
  if (passwordUpper) {
    charset += charsetUpper;
  }

  var passwordNumber = window.confirm("Would you like to use NUMBERS?");
  if (passwordNumber){
    charset += charsetNumber;
  }

  var passwordSymbol = window.confirm("Would you like to use SPECIAL CHARACTERS?");
  if (passwordSymbol){
    charset += charsetSymbol;
    
  } 
  
  if (!passwordLower && !passwordUpper && !passwordNumber && !passwordSymbol){
    window.alert("You did not pick any of the characters. Please try again!")
  }
  

  console.log(charset);

  var passwordFinal = "";
  for (let i = 0; i < length; ++i) {
		passwordFinal += charset.charAt(Math.floor(Math.random() * charset.length));
  }
    return passwordFinal;

};


 






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
