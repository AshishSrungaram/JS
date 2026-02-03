let number;

do{
    number = prompt("Enter a number between 0 and 100");
} while(!(number >= 0 && number < 100));


// start by setting the counter to 0
let counter = 0;

// create a variable step to increment your counter by
let step = 18;

//add a do while loop to print the counter untill a certain condition is true in the while
do{
    console.log(`The value of counter is : ${counter} `);
    counter = counter +step;
} while(counter <= 150);

console.log(`The Final value of counter is : ${counter} `);