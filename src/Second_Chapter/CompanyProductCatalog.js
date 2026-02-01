let inventory = {
    storeItems : []
}

let item1 = {
    Name : "Puff",
    Model : "Paneer Bhurji",
    Cost : "$3",
    quantity : 15
}

let item2 = {
    Name : "Samosa",
    Model : "Paneer Tikka",
    Cost : "$2",
    quantity : 20
}

let item3 = {
    Name : "Bonda",
    Model : "Aloo Bonda",
    Cost : "$3",
    quantity : 20
}

inventory.storeItems[0] = item1;
inventory.storeItems[1] = item2;
inventory.storeItems[2] = item3;

console.log(inventory);

let itemQuantity = inventory.storeItems[2].quantity;
console.log(itemQuantity);

myArr = [1,3,5,6,8,9,15];
myArr.splice(1,1,4);
console.log(myArr);