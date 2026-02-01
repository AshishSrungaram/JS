let dog = {
    Name: "Buddy",
    Age: 5,
    Color: "Black & Brown",
    Breed: "German Shepard",
    Weight: 2.5,
    burgularBiter: true
};

let Color2 = dog.Color;
console.log(Color2);

dog.Color = "Black";
dog.Name = "Chotu";
console.log(dog.Name);
console.log(dog.Color);