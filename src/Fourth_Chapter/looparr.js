let names = ["Ashish", "Rammohan", "Abhinav", "Padmalatha", "Bharath", "Charan", "Srinivas","Lalitha", "Ranga", "Padma"];

for (let i = 0; i < names.length; i++){
    if (names[i] === "Ashish" || names[i] === "Rammohan" || names[i] === "Abhinav" || names[i] === "Padmalatha"){
        console.log("The Srungaram Family tree has the names : " + names[i]);
    }
    else if (names[i] === "Bharath" || names[i] === "Srinivas" || names[i] === "Lalitha"){
        console.log("The Kandala Family tree has the names : " + names[i]);
    }
    else
    {
        console.log("The Kandalai Family tree has the names : " + names[i]);
    }
}

let name = ["Ashish", "Roshan", "Tharun", "Surendra", "Jagan"];
for (let i = 0; i < name.length; i++){
    if (name[i].startsWith("J")){
        delete name[i];
        continue;
    }
}
console.log(name);

