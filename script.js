// Assignment code here




//var chooseLength = parseInt(window.prompt("Please choose password length between 8 and 128 characters"));
  
console.log(chooseLength);

  function generatePassword() {
	
  var length = parseInt(window.prompt("Please choose password length between 8 and 128 characters"));
  while (isNaN(length) || length <8 || length > 128) {
    length = parseInt(window.prompt("Please choose password length between 8 and 128 characters"));
  }
}
  var passwordChosen = "";
  

  function passwordLower() {
    window.confirm("Would you like to use LOWER case letters?");
    charsetLower = "abcdefghijklmnopqrstuvwxyz"; 
    return charsetLower[Math.floor(Math.random() * charsetLower.length)];
  }

  console.log(passwordLower());


  function passwordUpper() {
    window.confirm("Would you like to use UPPER case letters?");
    charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    return charsetUpper[Math.floor(Math.random() * charsetUpper.length)];
  }

  console.log(passwordUpper());

  

  // var passwordLower = window.confirm("Would you like to use LOWER case letters?");
  // charsetLower = "abcdefghijklmnopqrstuvwxyz"; 
  // if (passwordLower){
  //   passwordChosen += charsetLower;     
  // }

  // var passwordUpper = window.confirm("Would you like to use UPPER case letters?");
  // if (passwordUpper) {
  //   charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   passwordChosen += charsetUpper;
    
  // }

  var passwordNumber = window.confirm("Would you like to use NUMBERS?");
  if (passwordNumber){
    charsetNumber = "0123456789";
    passwordChosen += charsetNumber;
    
  }

  var passwordSymbol = window.confirm ("Would you like to use SPECIAL CHARACTERS?");
  if (passwordSymbol){
    charsetSymbol = "!#$%&'()*+,-./:;<]=>?@^_`{|}~[";
    passwordChosen += charsetSymbol;
    
  }

  passwordFinal = "";
  for (var i = 0; i < length; ++i) {
		passwordFinal += passwordChosen.charAt(Math.floor(Math.random() * passwordChosen.length));
	}
	return passwordFinal;

  

} else {
  
  window.alert("You did not choose a valid option");
  generatePassword();
}	
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
