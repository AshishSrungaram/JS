let car = {
    make : "Volvo",
    model : "XC90",
    year : "2025",
    price : "$52,000",
    color : "Black",
};

for (let prop in car){
    console.log(prop);
    console.log(car[prop]);
}