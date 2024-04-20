class Person { // Parent Class or Super Class 
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    manDetails(){
        console.log(`Person Details is: Name ${this.name}, AGE: ${this.age}`);
    }
}
class Man extends Person { // Child class or Sub class or Derived Class
    constructor(gender, canDeliverKid, manName, manAge){
        super(manName, manAge); // To invoke Parent class constructor
        this.gender = gender;
        this.canDeliverKid = canDeliverKid;
    }
    manDetails(){
        console.log(`Man Details is Gender: ${this.gender}, canDeliverKid: ${this.canDeliverKid}, NAME: ${this.name}, AGE: ${this.age} `);
    }
}
const manBill = new Man("Male", false, "Bill", 35);
manBill.manDetails();