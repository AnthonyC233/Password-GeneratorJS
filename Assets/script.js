//Created variables from upperCase, lowerCase, specialCase, and numberCase.
var generateBtn = document.querySelector("#generate");

var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowerCase = "qwertyuiopasdfghjklzxcvbnm"
var specialCase = "~!@#$%^&*()_-+={[}]|\:;<,>.?/";
var numberCase = "1234567890";

function generatePassword() {
    var randomPassword = "";
    console.log("Generating password");
    console.log(upperCase);
    console.log(lowerCase);
    console.log(specialCase);
    console.log(numberCase);

    var passwordLength = prompt(
        "Pick your password length by entering a number between 8 and 128."
    );
    
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Simple intructions! Pick a number between 8 and 128");
        console.log("Criteria wasn't met");
        return("Try again!")
    } else {
        console.log("Password length: " + passwordLength);
    }

    var allowedCharacters = [];

    var isUpperCase = confirm("Would you like to include uppercase characters?");
    if (isUpperCase === true) {
        allowedCharacters.push("upper");
    }
    console.log("isUpperCase: " + isUpperCase);

    var isLowerCase = confirm("Would you like to include lowercase characters?");
    if (isLowerCase === true) {
        allowedCharacters.push("lower");
    }
    console.log("isLowerCase: " + isLowerCase);

    var isSpecialCase = confirm("Would you like to include special case characters?");
    if (isSpecialCase === true) {
        allowedCharacters.push("special");
    }
    console.log("isSpecialCase: " + isSpecialCase);

    var isNumberCase = confirm("Would you like to include number case characters?");
    if (isNumberCase === true) {
        allowedCharacters.push("number");
    }
    console.log("isNumberCase: " + isNumberCase);

    for (var i = 0; i < passwordLength; i++) {
        var caseType = i % allowedCharacters.length;
        console.log(caseType);

        switch (allowedCharacters[caseType]) {
            case "upper":
                randomPassword += upperCase[Math.floor(Math.random() * upperCase.length)]
                break;
            case "lower":
                randomPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)]
                break;
            case "special":
                randomPassword += specialCase[Math.floor(Math.random() * specialCase.length)]
                break;
            case "number":
                randomPassword += numberCase[Math.floor(Math.random() * numberCase.length)]
                break;
        }
        //Code below was the way we learned but wanted to show another path.

        // var caseCharacter = allowedCharacters[caseType]
        // if (caseCharacter == "upper") {
        //     randomPassword += upperCase[Math.floor(Math.random() * upperCase.length)] 
        // } else if (caseCharacter == "lower") {
        //     randomPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)]
        // } else if (caseCharacter == "special") {
        //     randomPassword += specialCase[Math.floor(Math.random() * specialCase.length)]
        // } else {
        //     randomPassword += numberCase[Math.floor(Math.random() * numberCase.length)]
        // }

    }
    return randomPassword;    
}

function writePassword() {
    console.log("Generate password button clicked")
    var password = generatePassword();
    console.log("Password made" + password);
     var passwordText = document.querySelector("#password");
        
    passwordText.value = password;
  }
  
generateBtn.addEventListener("click", writePassword);