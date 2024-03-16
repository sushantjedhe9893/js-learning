// WA FE with one argument for values .. "JavaScript", "I am hero"
// Inside the FE check whether given word is even or odd length

var result = function(word){
    var result = word.length%2==0 ? "EVEN ": "ODD";
    console.log(`Given word ${word} is with ${result} length` );
   }
   result("JavaScript");
   result("I am hero");

   console.log(`====================================`);

   
// FE to check whether number is multiple of 3 or not
var multiple = function(num){
    var result = num%3==0 ? "Yes" : "No";
    console.log(`Given number ${num} is multiple of 3 ==> ${result}`);
}
multiple(9);
multiple(11);


console.log(`====================================`);

var a = 0;
var b = 0;
var result = a/b;
console.log(`a divide by b is : ${result}`);

console.log(`Type of ==> ${typeof result}`);

var n1 = "10";
console.log(`value of n1 is ${n1} and it's type is: ${typeof n1}`);

var n2 = +n1;
console.log(`value of n2 is ${n2} and it's type is: ${typeof n2}`);

var a = 5;
var b = a++;

console.log(a);
console.log(b);

var n1 = 5;
var res = n1++ + ++n1 + n1++;
console.log(res);

var a = 2;
var b = ++a + ++a + a++ - --a;
console.log(b);
console.log(a);

var a = 4
var b = a-- + ++a + ++a + a++;
console.log(a);
console.log(b);