let mycar = {
    Make : "Volvo",
    Model : "XC90",
    Color : "Black",
    Trim : "Premium",
    TireSize : "19 inchs",
    KeylessEntry : true
};

let Variable = "Color";
mycar[Variable] = "Royal Blue";
console.log(mycar);

mycar[Variable] = "forSale";
mycar[Variable] = "$63,000";

console.log(mycar.Make);
console.log(mycar.Model);
console.log(mycar[Variable]);