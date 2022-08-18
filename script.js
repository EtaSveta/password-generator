// Assignment code here


var chooseLength = Number(window.prompt("Please choose password length between 8 and 128 characters"));
  

console.log(chooseLength);

  function generatePassword() {
	var length = chooseLength;

  if (chooseLength > 7 && chooseLength < 129) {

  var passwordChosen = "";
  
  var passwordLower = window.confirm("Would you like to use LOWER case letters?");
  charsetLower = "abcdefghijklmnopqrstuvwxyz"; 
  if (passwordLower){
    passwordChosen += charsetLower;     
  }

  var passwordUpper = window.confirm("Would you like to use UPPER case letters?");
  if (passwordUpper) {
    charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    passwordChosen += charsetUpper;;
    
  }

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
