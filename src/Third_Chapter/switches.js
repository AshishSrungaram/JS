let Activity = prompt("what is your activity");

switch (Activity) {
    case "Get Up" :
        console.log("It is 6:30am : Get Up!!");
        break;

    case "Breakfast" :
        console.log("It is 7:30am : Breakfast!!");
        break;

    case "Drive to Work" :
        console.log("It is 8:30am : Drive to Work!");
        break;

    case "Lunch" :
        console.log("It is 12:30pm : Lunch!!");
        break;

    case "Drive Home" :
        console.log("It is 4:30pm : Drive Home!");
        break;

    case "Sleep" :
        console.log("It is 9:30pm : Sleep!!");
        break

    default:
        console.log("Please provide a Proper Prompt!!!");
        break;
}