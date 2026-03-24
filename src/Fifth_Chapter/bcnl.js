let groups =[
    ["Ashish", "Abhinav","Rammohan","Padmalatha"],
    ["Bharath","Srinivas","Lalitha","Bhavana"],
    ["Charan","Ranga","Padma","Charulatha"],
];

for (let i = 0; i < groups.length; i++){
    let matches = 0;

    for (let j = 0; j < groups[i].length; j++) {
        if (groups[i][j].startsWith("A")) {
            matches++;
        } else {
            continue;
        }
        if (matches === 2) {
            console.log("Found a group with two names starting with an A:");
            console.log(groups[i]);
            break;
        }
    }
}