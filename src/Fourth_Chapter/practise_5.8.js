// Set up a string variable to use as output.
let outputString = "";
// Select a number to skip, and set that number as a variable.
let numbertoSkip = 5;
// Create a for loop that counts to 10.
for (let i = 0; i<=10; i++) {
    // Add a condition to check if the value of the looped variable is equal to the number that should be skipped.
    if (i === numbertoSkip){
        //If the number is to be skipped in the condition, continue to the next number.
        continue;
    }
    // Append the new count value to the end of the main output variable
    // Add a comma for readability if it's not the first number
    if (outputString !== "") {
        outputString += ", ";
    }
    outputString += i;
}
// Reuse the code, but change the continue to break and see the difference. It
// should now stop at the skip value.
for (let j = 0; j <= 10; j++) {
    if (j === numbertoSkip){
        break;
    }
    if (outputString !== "") {
        outputString += ", ";
    }
    outputString += j;
}
console.log(outputString);
console.log(numbertoSkip);