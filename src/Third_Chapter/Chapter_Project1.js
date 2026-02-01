let Input = prompt("Please enter Your Number : ");
let Message;

if (Input < 100)
{
    Message = "Your Number is less";
}
else if(Input <= 200)
{
    Message = "You Number is equal to mine";
}
else
{
    Message = "Your Number is Greater than mine";
}

console.log(Message);