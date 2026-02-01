let company = {
    Name : "American Express",
    Activity : "Banking",
    Address : {
        Street : "1500 NW Street",
        City : "Sunrise",
        State : "Florida",
        Number : "12345678",
        ZipCode : "33323"
    },
    YearsOfEstablishment : 2017
}

company.Address.City = "Miami";
console.log(company);

let company1 = {
    Name : "American Express",
    Activity : ["Banking", "Development"," Infrastructure", "Credit Cards", "Debit Cards"],
    Address : {
        Street : "1500 NW Street",
        City : "Sunrise",
        State : "Florida",
        Number : "12345678",
        ZipCode : "33323"
    },
    YearsOfEstablishment : 2017
}

company1.Address.City = "Miami";
company1.Activity[0] = "Home Loans";
console.log(company1);

let addresses = [{
    street: "9078 NW 6th Ct",
    number: "9078",
    zipcode: "33324",
    city: "Plantation",
    state: "Florida"
},
{
    street: "2054 Wyoming Street",
    number: "Apt F",
    zipcode: "45410",
    city: "Dayton",
    state: "Ohio"
}];

let StreetName = addresses[1].street;
console.log(StreetName);