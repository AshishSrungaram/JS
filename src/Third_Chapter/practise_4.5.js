let Input = prompt("Enter Prize Number between 1 and 10");

let variable = "Your Selection : ";
let prize;

switch (Input)
{
    case "1":
        prize = "You Won a Lottery Ticket";
        break;

    case "2":
        prize = "You Won a Porsche Car";
        break;

    case "3":
        prize = "You Won a Book - 'Harry Potter and the Uncursed Child'";
        break;

    case "4":
        prize = "You Won a Scratch Card worth $2,000";
        break;

    case "5":
        prize = "You Won a Powerball";
        break;

    case "6":
        prize = "You Won a Puppy - 'Golden Retriever'";
        break;

    case "7":
        prize = "You won a ticket to trip for PARIS";
        break;

    case "8":
        prize = "You won a Dinner with Josephine Langford";
        break;

    case "9":
        prize = "You Won a signed merchandise from Argentina National football club signed by MESSI";
        break;

    case "10":
        prize = "You won a Lamborghini";
        break;

    default:
        prize = "Sorry!! Try again later";
        break;
}

console.log(variable.concat(Input));
console.log(`Your Prize is : ${prize}`);
