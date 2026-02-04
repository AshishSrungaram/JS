let emptyArr = [];

for (let i = 0; i <= 10; i++) {
    emptyArr.push(i);
}
console.log("Full Array : " + emptyArr);

for (let i = 0; i <= emptyArr.length; i++) {
    console.log("For Loop Value:", emptyArr[i]);
}

for (let values of emptyArr) {
    console.log("For...Of Value:" + values);
}