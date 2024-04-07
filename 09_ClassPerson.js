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
jenny.detail();

const bill = new Person("Bill", "Mumbai", 24);
bill.detail();

const elon = new Person("Elon", "LA", 38);
elon.detail();

console.log(`===== Traversing array object ======`);
const array = [jenny, bill, elon];
for (const element of array) {
   element.detail(); 
}