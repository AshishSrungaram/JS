let People = {
    Friends : []
}

let friend1 = {
    firstName : "Ashish",
    lastName : "Srungaram",
    Id : 1,
}

let friend2 = {
    firstName : "Roshan",
    lastName : "Kale",
    Id : 2,
}

let friend3 = {
    firstName : "Siddhi",
    lastName : "Davankar",
    Id : 3,
}

People.Friends[0] = friend1;
People.Friends[1] = friend2;
People.Friends[2] = friend3;

console.log(People);

