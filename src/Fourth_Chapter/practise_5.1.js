// Set the maximum value for the guessing range.
// The user prompt in the while loop specifically requests a number between 1 and 5.
const maxValue = 5;

// Generate a random number for the solution between 1 and maxValue (inclusive).
// Math.random() generates a number between 0 (inclusive) and 1 (exclusive).
// Math.floor(Math.random() * maxValue) generates a number between 0 and maxValue - 1.
// Adding 1 adjusts the range to be 1 through maxValue.
const solution = Math.floor(Math.random() * maxValue) + 1;

// Log the solution to the console for development/testing purposes.
// This line can be commented out once the game is fully developed.
console.log(`Development: The solution is ${solution}`);

// Variable to track if the answer is correct. Default to false to ensure the while loop starts.
let isCorrect = false;

// Use a while loop to repeatedly ask the user for a number until they guess correctly.
while (!isCorrect) {
    // Prompt the user for a guess.
    // The prompt returns a string, so it must be converted to a number using Number() or parseInt().
    let userGuess = Number(prompt(`Enter a number between 1 and ${maxValue}:`));

    // Check if the user's input is valid and within the range.
    if (isNaN(userGuess) || userGuess < 1 || userGuess > maxValue) {
        alert("Invalid input. Please enter a valid number within the specified range.");
        // Continue to the next iteration of the loop without checking the condition
        continue;
    }

    // Check if the user's guess matches the solution.
    if (userGuess === solution) {
        // If correct, update the status to true.
        isCorrect = true;
        // Provide positive feedback and break out of the loop.
        alert(`Congratulations! You guessed the correct number: ${solution}`);
        break;
    } else if (userGuess < solution) {
        // If the guess is too low, provide feedback.
        alert("Too low! Try a higher number.");
    } else {
        // If the guess is too high, provide feedback.
        alert("Too high! Try a lower number.");
    }
}
