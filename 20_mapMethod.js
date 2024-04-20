let array = [2, 4, 1, 7, 8];

let arrayTransform = [];
array.forEach(element => {
    arrayTransform.push(element+10);
});

console.log(array);
console.log(arrayTransform);

const arrayNew = array.map( (currentValue)=>{
    return currentValue+10;
} );

console.log(arrayNew);

const arraySquare = array.map( (currentValue)=>{
    return currentValue * currentValue;
} );
console.log(arraySquare);

class Person {
    constructor(name, city, age){
        this.name = name;
        this.city = city;
        this.age = age;
    }
    detail(){
        console.log(`Person Details => Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);
    }
}
const jenny = new Person("Jenny", "Pune", 22);
const bill = new Person("Bill", "Mumbai", 24);
const elon = new Person("Elon", "LA", 38);
const stew = new Person("Stew", "Pune", 58);

const arrayPerson = [jenny, bill, elon, stew];
const arrayNames = arrayPerson.map( (employee)=>{
    return employee.name;
} );
console.log(arrayNames);