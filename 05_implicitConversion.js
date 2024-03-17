console.log(`----- Implicit Conversion to String -----`);

var result = "3" + 2;
console.log(result);

var result = "3" + undefined;
console.log(result);

var result = "3" + true;
console.log(result);

var result = "3" + null;
console.log(result);

console.log(`----- Implicit boolean Conversion to number  -----`);

var result = "4" - true;
console.log(result); 

var result = 4 + true;
console.log(result);

var result = 4 + false;
console.log(result);

console.log(`----- Implicit string Conversion to number  -----`);

var result = "4" - "2";
console.log(result);

var result = "4" - 2;
console.log(result);

 var result = "4" * 2;
 console.log(result);

 var result = "4" / 2;
 console.log(result);

 console.log(`----- Undefined used with number, boolean or null given NaN -----`);
 console.log(`Arthimetic operation of undefined with number, boolean or null gives NaN`);
 
 var result = 4 + undefined;
 console.log(result);
  
 var result = 4 - undefined;
 console.log(result);
 
 var result = true + undefined;
 console.log(result);
 
 var result = null + undefined;
 console.log(result);

 console.log(`----- Explicit Conversion -----`);
 console.log(`-----//string to number -----`);
 
 var result = Number("324");
 console.log(result);

 var result = Number("324e-1")
 console.log(result);

 console.log(`----- //Boolean to number -----`);

 var result = Number(true)
 console.log(result);

 var result = Number(false);
 console.log(result);

 console.log(`----- Invalid string Conversion to number return NAN -----`);

 var result = Number("hello");
console.log(result);

var result = Number(undefined);
console.log(result);

var result = Number(NaN);
console.log(result);

console.log(`------------- String to number using + operator --------------------`);

var n1 = "100";
var result = n1;
console.log(typeof result);

var n1 = "100";
var result = +n1;
console.log(typeof result);