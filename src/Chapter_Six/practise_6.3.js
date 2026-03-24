// setup two variables contaning number values
let number1 = 25;
let number2 = 5;
// setup a variable to hold an operator
let operatorValue = "*";

// Create a function that retrieves the two values and the operator string value
// within its parameters. Use those values with a condition to check if the
// operator is + or -, and add or subtract the values accordingly (remember if
// not presented with a valid operator, the function should default to addition).
function checkSum(number1, number2 , operatorValue) {
    if (operatorValue === "+") {
        return number1 + number2;
    }
    else if (operatorValue === "-") {
        return number1 - number2;
    }
    else if (operatorValue === "*") {
        return number1 * number2;
    }
    else if (operatorValue === "/") {
        return number1 / number2;
    }
    else if (operatorValue === "%") {
        return number1 % number2;
    }
    else{
        return "NaaN"
    }
}
// Within console.log(), call the function using your variables and output
// the response to the console.
console.log(checkSum(number1, number2, operatorValue));