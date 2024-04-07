const person = {
    name: "Gajanan",
    city: "Pune",
    experience: 10
}
// Not allowed
// person = { 
//     pin: 12345
// }
console.log(person);
person.city= "Mumbai";
console.log(person);

const address = {
    flatNumber: 1005,
    wing: "B2 Block",
    street: "Wakad"
}
console.log(address);
Object.freeze(address);

address.street = "Kharadi";// Won't reflect this change as object address is freezed
console.log(address);
// Get the keys from an object
const keys = Object.keys(address);
console.log(keys);

// Get the values from an object
const values = Object.values(address);
console.log(values);