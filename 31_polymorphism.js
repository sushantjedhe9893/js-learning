class Calculation {
    constructor(){

    }
    add(num1, num2, num3){
        if (arguments.length==2) {
            console.log(num1 + num2);
        }
        if (arguments.length==3) {
            console.log(num1 + num2 + num3);
        }
        if (arguments.length==1) {
           console.log(num1); 
        }  
    }
}
const cal = new Calculation();
cal.add(10, 20);
cal.add(10, 20, 40);
cal.add(34);