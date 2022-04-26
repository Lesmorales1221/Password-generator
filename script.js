
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
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special ='!@#$%^&*()_-+={}[]|\:<>?,./';
var numbers = '01234567890';
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
  alert('The next screen will ask you what types of characters you would want to include for your password. /nIf you choose to just keep lowercase letters be free to press No got all')
}
return passwordLength;
}


//Making a function that determines whether the user wants to include uppercase characters in the password
function determineUppercase(){
  checkUppercase = prompt('Would you like to to include uppercase letters in your password? /n(Yes or No)');
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
  checkNumbers = prompt('Would you like to include numbers in your pasword? /n(Yes or No)');
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
  checkSpecial = prompt('Would you like to include special characters in your password? /n(Yes or No)');
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
  
  }
}











// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
