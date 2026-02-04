let bike = {
    make : "Triumph",
    model : "Daytona",
    year : 2025,
    cost : "$8,000",
}

for (let yourDesire in bike){
    console.log(`${yourDesire} : ${bike[yourDesire]}`);
}

let bikes = ["Triumph", "Daytona", 2025, "$8,000"];

for (let yourLike of bikes){
    console.log(yourLike);
}
