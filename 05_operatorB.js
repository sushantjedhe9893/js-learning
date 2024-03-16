console.log(`------------------------ Step 1 ----------------------------------`);

var result = function(n1,n2){
var res = n1>n2 ? "800 is greater than 899":"899 is greater than 800";
console.log(res);
}
result(10, -10);
result(800,899);

console.log(`------------------------ Step 2 ----------------------------------`);

var isEvenOrOddNum = function(arg1){
var RES = arg1%2==0 ? "EVEN" : "ODD" ;
console.log(`Given number ${arg1} is ${RES}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`------------------------ Step 3 ----------------------------------`);

var wordLength = function(string){
var result = string.length%2==0 ? "EVEN" : "ODD" ;
console.log(`Given word ${string} is with ${result} length`);
}
wordLength("JavaScript")
wordLength("Developer")
wordLength("Google")