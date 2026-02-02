let i = 0;
while (i < 10) {
    i++;
    console.log(i);
}

let someArray = ["Ashish","Srungaram","Rammohan","Padmalatha","Abhinav"];
let notFound = true;

while(notFound && someArray.length > 0)
{
    if (someArray[0] === "Rammohan")
    {
        console.log("Found Him/Her!!");
        notFound = false;
    }
    else
    {
        someArray.shift();
    }
}