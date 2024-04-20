class employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new employee(77, "Monila", "IT", 40000, "Wipro");
const emp_viny = new employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new employee(99, "Mahesh", "HR", 85000, "Infy");


const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`======================= Step 1 ========================`);
console.log(`Employee who works in only "TCS" & log only Employee and its Company Name`);
     
arrayEmployee.forEach(element => {
    if (element.emp_company == "TCS") {
             console.log( `Employee Name : ${element.emp_name} and Company Name :${element.emp_company}`);
    }
});

console.log(`========================= Step 2 ===============================`);


console.log(`"Finance" department employees & log with Employe name and Department`);


arrayEmployee.forEach(element => {
    if (element.emp_dept=="Finance") {
               console.log(`Employee Name : ${element.emp_name}  and  Employee Department : ${element.emp_dept}`);
    }
});


console.log(`========================= Step 2 ===============================`);

console.log(`Employee whos name starts with "R" & log complete details `);

arrayEmployee.forEach(element => {
   emp_name
    
});