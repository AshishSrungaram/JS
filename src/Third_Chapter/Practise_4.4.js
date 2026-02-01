// this creates a variable that could generate a random number between 0 and 1
let randomNumber = Math.random();
// this is to multiply the randomNumber 10 times so that we could get the numbers after decimal points
randomNumber = randomNumber * 10;
// this is to remove the numbers after the decimal to provide a whole number
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);
//  this is the Prompt
let Input = prompt("Please enter the question that you have");

//  this is to capture the response from the switch statements
let endResponse = "";

switch (randomNumber) {
    case 1:
        endResponse = "You will be winning the lottery pretty soon";
        break;

    case 2:
        endResponse = "You will be on the path to a great future and prosporous life";
        break;

    case 3:
        endResponse = "You will be find your Love of the Life soon!! All The Best!";
        break;

    case 4:
        endResponse = "Do not count on it; the future is currently murky.";
        break;

    case 5:
        endResponse = "Signs point to 'yes', but timing is everything.";
        break;

    case 6:
        endResponse = "The outlook is distinctly positive; proceed with confidence.";
        break;

    default:
        endResponse = "An error in the cosmic alignment occurred. Try again.";
        break;
}
console.log("----Oracle Response------");
console.log(`The question the you asked is : '${Input}'`);
console.log(`The Oracle says that : '${endResponse}'`);