let maxValue = 10;

let solution = Math.floor(Math.random() * maxValue) + 1;
console.log(`The Correct number is : ${solution}`);

let isCorrect = false;

while(!isCorrect)
{
    let userGuess = Number(prompt(`Enter the number your are guessing between 1 and ${maxValue}`));

    if (isNaN(userGuess) || userGuess < 1 || userGuess > maxValue) {}

    if (userGuess === solution)
    {
        isCorrect = true;
        alert(`You have Guessed the right number which is ${solution}!`);
        break;
    }
    else if (userGuess < solution)
    {
        alert ("Number is too low!! guess again");
    }
    else if (userGuess > solution)
    {
        alert("Your number is too high!! guess again")
    }
}