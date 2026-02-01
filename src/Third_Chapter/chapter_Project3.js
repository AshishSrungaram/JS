// this is the code for Rock, Paper, Scissors Game

let options = ["Rock", "Paper", "Scissors"];
let consoleOutputMessage;
// this is to create a random number for the player & computer
let playerRandomNumber = Math.floor(Math.random() * 3);
let computerRandomNumber = Math.floor(Math.random() * 3);

// Get the actual selection strings using the random indices.
const playerSelection = options[playerRandomNumber];
const computerSelection = options[computerRandomNumber];

// Create a variable to hold a response message to the user.
let responseMessage ;

if (playerSelection === computerSelection) {
    responseMessage = ("It's a TIE");
}
else if ( (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
    responseMessage = ("Player Wins!!");
}
else
{
    responseMessage = ("Computer Wins!!");
}

consoleOutputMessage = `Player chose: ${playerSelection}\n The computer chose: ${computerSelection}`;
console.log(consoleOutputMessage);
console.log(responseMessage);