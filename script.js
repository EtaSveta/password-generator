// Assignment code here


// A better way to write this program would be many smaller functions that way you would be able to ask for the length and what characters to use outside of the function and then it would all be able to work properly without errors with the window alerts

// I believe that the characters are also supposed to be in an array rather than a string for this assignment


// The way the assignment is supposed to be structured is to have multiple arrays of characters, then based on what characters the user chooses a new array is created by adding the individual arrays together. Then the generate password function should be called using the password length and the array of characters and that would generate the password correctly. All of the error checking with the window alerts for password length and character selection would be handled in the earlier functions to make sure the generate password function will work

// does that structure make more sense? That is the structure of the intended solution to the assignment.

// A cleaner solution is to break it up into individual functions for each or all of the if statements, then once you have what characters they would like, you can check to make sure they have characters selected, if they do not then you can restart from the password length function. Same goes for the Length function it would ask the length, if it is invalid then it would reset the function and ask for the length. Once you have the answer for how long the password should be and what characters the user would like then you will run the final generation function which will take the length of the password and all of the characters and create a password for the user.



//That is the structure of the intended solution to the assignment.


var chooseLength = parseInt(window.prompt("Please choose password length between 8 and 128 characters"));
  
console.log(chooseLength);

  function generatePassword() {
	
  var length = parseInt(window.prompt("Please choose password length between 8 and 128 characters")) {


  while (isNaN(length) || length <8 || length > 128) 
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
