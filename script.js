
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


// Assignment code here
var generateBtn = document.querySelector('#generate');
var lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar ='!@#$%^&*()_-+={}[]|\:<>?,./';
var numbersChar = '01234567890';
var passwordLength;
var checkUppercase;
var checkNumbers;
var checkSpecial;

//Making a function that determines the length of the password 
function determineLength(){
    passwordLength = prompt('Please choose how many characters long you would like your password to be (has to be between 8-128 characters):');

    if (passwordLength<8){
        alert('The password lenght MUST be a number between 8-128 characters');
        determineLength();
}else if (passwordLength>128){
  alert('The password length MUST be a number between 8-128 characters');
  determineLength();
}else if (isNaN(passwordLength)){
  alert('The password length MUST be a number between 8-128 characters');
  determineLength();
}else{
  alert('The next screen will ask you what types of characters you would want to include for your password. If you choose to just keep lowercase letters be free to press No')
}
return passwordLength;
}


//Making a function that determines whether the user wants to include uppercase characters in the password
function determineUppercase(){
  checkUppercase = prompt('Would you like to to include uppercase letters in your password? (Yes or No)');
    checkUppercase = checkUppercase.toLowerCase();

  if (checkUppercase === null || checkUppercase === ""){
    alert('If you could please answer Yes or No');
    determineUppercase();
  }else if (checkUppercase === "yes" || checkUppercase ==="y"){
    checkUppercase = true;
    return checkUppercase;
  }else if (checkUppercase === "no" || checkUppercase ==="n"){
    checkUppercase = false;
    return checkUppercase;
  }else {
    alert('If you could please answer Yes or No');
    determineUppercase();
  }
  return checkUppercase
}


//Making a function that determines whether the user wants to include numbers in the password
function determineNumbers(){
  checkNumbers = prompt('Would you like to include numbers in your pasword? (Yes or No)');
  checkNumbers = checkNumbers.toLocaleLowerCase();

  if (checkNumbers === null || checkNumbers === ""){
    alert('If you could please answer Yes or No');
    determineNumbers();

  }else if (checkNumbers === "yes" || checkNumbers ==="y"){
  checkNumbers = true;
  return checkNumbers;

  }else if (checkNumbers === "no" || checkNumbers ==="n"){
    checkNumbers = false;
    return checkNumbers;

  }else {
    alert('If you could please answer Yes or No');
    determineNumbers();
  }
  return checkNumbers;
}


//Making a function that determines whether the user wants to include special characters in the password
function determineSpecial(){
  checkSpecial = prompt('Would you like to include special characters in your password? (Yes or No)');
  checkSpecial = checkSpecial.toLowerCase();

  if (checkSpecial === null || checkSpecial === ""){
    alert('If you could please answer Yes or No');
    determineSpecial();

  }else if (checkSpecial === "yes" || checkSpecial ==="y"){
    checkSpecial = true;
    return checkSpecial;

  }else if (checkSpecial === "no" || checkSpecial ==="n"){
  checkSpecial = false; 
  return checkSpecial;

  }else {
    alert('If you could please answer Yes or No');
    determineSpecial();
  }
  return checkSpecial; 
}


//These are the function that is used to take all the inpult from the previous functions and generate a password by using random number generator
// The charAt method
function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(checkUppercase);
  determineNumbers();
  console.log(checkNumbers);
  determineSpecial();
  console.log(checkSpecial);


var character = lowercaseChar;
var password = ""; 
if (checkUppercase && checkNumbers && checkSpecial){
  characters += uppercaseChar + numbersChar + specialChar;

}else if (checkUppercase && checkNumbers){
  characters += uppercaseChar + numbersChar;

}else if (checkNumbers && checkSpecial){
  characters += numbersChar + specialChar;

}else if (checkUppercase && checkSpecial){
  characters += uppercaseChar + specialChar;

}else if (checkUppercase){
  characters += uppercaseChar; 

}else if (checkNumbers){
  characters += numbersChar;

}else if (checkSpecial){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

for(var i = 0; i < passwordLength; i++){
  password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password; 
}





// Write password to the #password input
function writePassword() {
  var password1 = "";
  var password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1 ;

}

//function resetText(){
// document.getElementById("password").value = "Your Secure Password";
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
