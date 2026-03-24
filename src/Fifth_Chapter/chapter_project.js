// 1. Set a value variable for the table size
const tableSize = 10;
// 2. Set up a blank array to contain the final multiplication table
const multiplicationTable = [];

// 3. Create an outer for loop to iterate through each row
for (let i = 1; i <= tableSize; i++) {
    // Create a temp array to store the row values
    let row = [];

    // 4. Add an inner for loop for the column values
    for (let j = 1; j <= tableSize; j++) {
        // Push the multiplied row and column values to the temp array
        row.push(i * j);
    }

    // 5. Add the temporary row data to the main table array
    multiplicationTable.push(row);
}

// Result: A 2D Array
console.log(multiplicationTable);
