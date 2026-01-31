favouriteFruits = ["Grapefruit", "Bananas", "Apples", "lemon"];
favouriteFruits.push("Watermelon");
console.log(favouriteFruits);
let lengthOffavouriteFruits = favouriteFruits.push("Lime");
console.log(favouriteFruits);

let arrOfShapes = ["Circle", "Rectangle", "Oval", "Pentagon"];
arrOfShapes.splice(2,0, "Sqaure", "Octagon");
console.log(arrOfShapes);

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

let arr4 = arr3.concat(7,8,9);
console.log(arr4);
console.log(arr4.pop());
console.log(arr4.shift());
console.log(arr4.splice(0,3));
console.log(arr4);