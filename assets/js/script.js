//Assignment Code


// character arrays declared
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '~', '`', '|', '}', '{', '[', ']', ':', ';', '?', '>', '<', '.', '/', '-', '='];
var lowerCaseLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// working variables declared
var enterNumber;
var booleanUpper;
var booleanLower;
var booleanNumber;
var booleanSymbol;

var concatChoice;

var getPasswordButton = document.querySelector('#button');

getPasswordButton.addEventListener("click", () => {
        pass = generatePassword();
        document.getElementById("password").innerHTML = pass;

    })

function generatePassword() {

    //asks user to input length of password
    enterNumber = parseInt(prompt('Choose a password length between 8 - 128'));
    if (!enterNumber) {
        alert("This value cannot be blank");
    } else if (enterNumber < 8 || enterNumber > 128) {
        // makes sure user inputs the correct value
        enterNumber = parseInt(prompt('Please choose between 8 - 128'));
       
    } else {
         // code that initiated user input prompts
        booleanLower = confirm('Will the password contain lower case letters?');
        booleanUpper = confirm('Will the password contain upper case letters?');
        booleanNumber = confirm('Will the password contain numbers?');
        booleanSymbol = confirm('Will the password contain special characters?');
    };




// If user doesn't select any options
if (!booleanLower && !booleanUpper && !booleanNumber&& !booleanSymbol) {
    concatChoice = alert("You must choose a criteria!");

}
// If statement to determine user choice
// if user selects all 4 options
else if (booleanLower && booleanUpper && booleanNumber && booleanSymbol) {

    concatChoice = lowerCaseLettersArray.concat(upperCaseLettersArray, numbersArray, symbolsArray);
}
// Else if for 3 positive options
else if (booleanLower && booleanUpper && booleanNumber) {
    concatChoice = lowerCaseLettersArray.concat(upperCaseLettersArray, numbersArray);
}
else if (booleanLower && booleanNumber && booleanSymbol) {
    concatChoice = lowerCaseLettersArray.concat(numbersArray, symbolsArray);
}
else if (booleanUpper && booleanNumber&& booleanSymbol) {
    concatChoice = upperCaseLettersArray.concat(numbersArray, symbolsArray);
}
else if (booleanLower && booleanUpper && booleanSymbol) {
    concatChoice = lowerCaseLettersArray.concat(upperCaseLettersArray, symbolsArray);
}
// If user selects 2 options 
else if (booleanLower && booleanUpper) {
    concatChoice = lowerCaseLettersArray.concat(upperCaseLettersArray);

} else if (booleanLower && booleanNumber) {
    concatChoice = lowerCaseLettersArray.concat(numbersArray);

} else if (booleanLower && booleanSymbol) {
    concatChoice = lowerCaseLettersArray.concat(symbolsArray);
}
else if (booleanUpper && booleanNumber) {
    concatChoice = upperCaseLettersArray.concat(numbersArray);

} else if (booleanUpper && booleanSymbol) {
    concatChoice = upperCaseLettersArray.concat(symbolsArray);

} else if (booleanNumber && booleanSymbol) {
    concatChoice = numbersArray.concat(symbolsArray);
}
// If user selects 1 option
else if (booleanLower) {
   concatChoice = lowerCaseLettersArray;
}
else if (booleanUpper) {
    concatChoice = upperCaseLettersArray;
}
else if (booleanNumber) {
    concatChoice = numbersArray;
}
else if (booleanSymbol) {
    concatChoice = symbolsArray;
};

var userLength = [];  // placeholder for selected user length


for (var i = 0; i < enterNumber; i++) {
    var selection = concatChoice[Math.floor(Math.random() * concatChoice.length)];
    userLength.push(selection);
}

var pass = userLength.join("");
UserInput(pass);
return pass;

}

function UserInput(pass) {
    document.getElementById("password").innerHTML = pass;

}
