class Student {
    constructor (rollNumber,name,division){
        this.rollNumber = rollNumber;
        this.name = name;
        this.division = division;
    }
    getdetail(){
        console.log(`Student Detail => Roll no: ${this.rollNumber}, Name: ${this.name}, Division: ${this.division}`);
    }
}
const jenny = new Student("413", "Jenny", "B");
jenny.getdetail();

const Sushant = new Student("333", "Sushant", "A");
jenny.getdetail();

const Nidhi = new Student("414", "Nidhi", "C");
jenny.getdetail();

const array = [jenny, Sushant, Nidhi];
for (const element of array) {
   element.getdetail(); 
}