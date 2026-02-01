let InputName = prompt("What is your name?");
let InputAge = prompt("What is your age?");
let Age = InputAge;
let Message
console.log("Hi!! " + InputName);
console.log("Your Age is : " + Age);
if (Age >= 21)
{
    Message = "** You can come in and also you can purchase alcohol now.**";
}
else if (Age >= 19)
{
    Message = "** You can come in but you cannot purchase alcohol now.**";
}
else
{
    Message = "** You can't come in and also you can't purchase alcohol now.** **";
}
console.log(Message);

