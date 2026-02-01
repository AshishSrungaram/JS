let arr = [3,4,5,6,7,8,9,10];
let findValue = arr.find(function(e) {return e === 9});
let findValue2 = arr.find(e => e === 6);
let findValue3 = arr.find(a => a === 12);
console.log(findValue2);
console.log(findValue);
console.log(findValue3);

arr2 = [1,2,3,4,5,6,7,8,9,10];
let findIndex = arr.indexOf(5);
let findIndex2 = arr.indexOf(7);
let findIndex3 = arr.indexOf(15);
console.log(findIndex, findIndex2, findIndex3);

let animals = ["cat", "dog", "fish","orungutan", "Chimps"];
let lastAnimal = animals.lastIndexOf("Chimps");
console.log(lastAnimal);