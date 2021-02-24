// selects the button to activate password generation code
var getPasswordButton = document.querySelector('#button');

getPasswordButton.addEventListener("click", () => {
    pass = generatePassword();
    if (pass != undefined) {
        document.getElementById("password").innerHTML = pass;
    }
})

/*
  Input validation to continue prompting
*/
function inputNumber() {
    let promptResponse = prompt('Choose a password length between 8 - 128 characters')
    let selectedNumber;
    if (promptResponse == null) {
        alert("You've selected 'Cancel' please try again.")
        return null;
    }
    selectedNumber = parseInt(promptResponse);

    if (!selectedNumber) {
        alert("This value cannot be blank");
        inputNumber();
    } else if (selectedNumber < 8) {
        alert(`You've made an invalid selection, you selected: ${selectedNumber} which is < 8`);
        inputNumber();
    } else if (selectedNumber > 128) {
        alert(`You've made an invalid selection, you selected: ${selectedNumber} which is > 128`);
        inputNumber();
    }
    return selectedNumber;
}

/*
    This function accepts user input on password length and types of characters
*/
function generatePassword() {

    // character arrays declared
    const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '~', '`', '|', '}', '{', '[', ']', ':', ';', '?', '>', '<', '.', '/', '-', '='];
    const lowerCaseLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upperCaseLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    // variable that concatenates password from multiple arrays
    let concatChoice;

    // working variables declared for pass lengthnumber and true/false options
    let booleanUpper = false;
    let booleanLower = false;
    let booleanNumber = false;
    let booleanSymbol = false;

    //asks user to input length of password
    const enterNumber = inputNumber();
    if (enterNumber == null) {
        return;
    }

    if (enterNumber) {
        // code that initiated user input prompts
        booleanLower = confirm('Will the password contain lower case letters?');
        booleanUpper = confirm('Will the password contain upper case letters?');
        booleanNumber = confirm('Will the password contain numbers?');
        booleanSymbol = confirm('Will the password contain special characters?');
    }


    // If user doesn't select any options

    if (!booleanLower && !booleanUpper && !booleanNumber && !booleanSymbol) {
        concatChoice = alert("You must choose a criteria!");

    }

    // if user selects all 4 options
    else if (booleanLower && booleanUpper && booleanNumber && booleanSymbol) {
        concatChoice = lowerCaseLettersArray.concat(upperCaseLettersArray, numbersArray, symbolsArray);
    }
    // Else if for 3 positive options
    else if (booleanLower && booleanUpper && booleanNumber) {
        concatChoice = lowerCaseLettersArray.concat(upperCaseLettersArray, numbersArray);
    } else if (booleanLower && booleanNumber && booleanSymbol) {
        concatChoice = lowerCaseLettersArray.concat(numbersArray, symbolsArray);
    } else if (booleanUpper && booleanNumber && booleanSymbol) {
        concatChoice = upperCaseLettersArray.concat(numbersArray, symbolsArray);
    } else if (booleanLower && booleanUpper && booleanSymbol) {
        concatChoice = lowerCaseLettersArray.concat(upperCaseLettersArray, symbolsArray);
    }
    // Else is for 2 positive options
    else if (booleanLower && booleanUpper) {
        concatChoice = lowerCaseLettersArray.concat(upperCaseLettersArray);

    } else if (booleanLower && booleanNumber) {
        concatChoice = lowerCaseLettersArray.concat(numbersArray);

    } else if (booleanLower && booleanSymbol) {
        concatChoice = lowerCaseLettersArray.concat(symbolsArray);
    } else if (booleanUpper && booleanNumber) {
        concatChoice = upperCaseLettersArray.concat(numbersArray);

    } else if (booleanUpper && booleanSymbol) {
        concatChoice = upperCaseLettersArray.concat(symbolsArray);

    } else if (booleanNumber && booleanSymbol) {
        concatChoice = numbersArray.concat(symbolsArray);
    }
    // Else if for 1 positive option
    else if (booleanLower) {
        concatChoice = lowerCaseLettersArray;
    } else if (booleanUpper) {
        concatChoice = upperCaseLettersArray;
    } else if (booleanNumber) {
        concatChoice = numbersArray;
    } else if (booleanSymbol) {
        concatChoice = symbolsArray;
    };

    var userLength = []; // placeholder for selected user length

    // loop generates a random selecion for all the variables and pushes into the 
    // pasword array 
    for (var i = 0; i < enterNumber; i++) {
        var selection = concatChoice[Math.floor(Math.random() * concatChoice.length)];
        userLength.push(selection);
    }

    // changes generated password to string
    var pass = userLength.join("");
    UserInput(pass);
    return pass;

}

// displays password in the placeholder field (#password) as a string
function UserInput(pass) {
    document.getElementById("password").innerHTML = pass;

}