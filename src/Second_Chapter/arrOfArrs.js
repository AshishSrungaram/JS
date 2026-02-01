let someValues1 = [1,2,3];
let someValues2 = [4,5,6];
let someValues3 = [7,8,9];

let arrOfArrs = [someValues1, someValues2, someValues3];
console.log(arrOfArrs);

let arrOfArrs2 = [arrOfArrs, arrOfArrs, arrOfArrs];
console.log(arrOfArrs2);

let setOfArr = [1,2,3];
let setOfArrs2 = [setOfArr, setOfArr, setOfArr];
let value2 = setOfArrs2[2][2];
console.log(value2);
console.log(setOfArrs2);