let bike = {
    make : "Triumph",
    model : "Daytona",
    year : 2025,
    cost : "$8,000",
}

let arrKeys = Object.keys(bike);
console.log(arrKeys);

//we can also loop over the obj keys to print the keys
for (let key of Object.keys(bike)) {
    console.log(key);
}

let arrObjs = Object.values(bike);
console.log(arrObjs);

// we can also loop over the obj values similarly to print the values
for (let values of Object.values(bike)) {
    console.log(values);
}

// we can also print the indexes of the key and values using 'for in loop'
for (let keys in Object.keys(bike))
{
    console.log(keys);
}
for (let value in Object.values(bike))
{
    console.log(value);
}

// we can also loop this in a regular way

for (i = 0; i < arrKeys.length; i++)
{
    console.log(arrKeys[i] + " : " + bike[arrKeys[i]]);
}

let arrEntries = Object.entries(bike);
console.log(arrEntries);

for (let [key, value] of Object.entries(bike))
{
    console.log(key, ": ", value)
}