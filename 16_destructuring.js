let person = {
    name: "Gajanan",
    city: "Pune",
    experience: 10, 
    pin: 431202
}
// Object Destructuring
// let name = person.name;
// let city = person.city;
// let pin = person.pin;
let {name, city, pin, isMarried = true} = person;
console.log(`name: ${name}, city: ${city}, pin: ${pin}, isMarried: ${isMarried}`);

// Array Destructuring
const array = ["Jenny" , "Bill", "Stew"];
// let element0 = array[0];
// let element1 = array[1];
// let element2 = array[2];
let [element0, element1, element2, element4="Elon"] = array;
console.log(`element0: ${element0}, element1: ${element1}, element2: ${element2}, element4: ${element4}`);