let arrOfArrsofArray = [];

for (let i = 0 ; i < 3 ; i++){
    arrOfArrsofArray.push([]);
    for (let j = 0 ; j < 10 ; j++){
        arrOfArrsofArray[i].push(j);
    }
}
console.table(arrOfArrsofArray);