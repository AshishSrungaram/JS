let inputName = prompt("What is the name?");

let Name ="";

switch (inputName) {
    case "Ashish":
        Name ="This is your Name";
        break;

    case "Roshan":
        Name ="This is your friend";
        break;

    case "Tharun":
        Name ="This is your friend";
        break;

    case "Siddhi":
        Name ="This is your friend";
        break;

    default:
        Name = "This is not you friend";
        break;
}

console.log(`The name you entered is : ${inputName}`);
console.log(Name);