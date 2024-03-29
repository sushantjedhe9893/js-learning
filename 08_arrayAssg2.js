console.log(`============ Step 1 ===================`);

const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`The total elements Available are :- ${arrayNumbers.length}`);

console.log(`============ Step 2 ===================`);

console.log(`First Element in arrayNumbers is ${arrayNumbers[0]} and Last element in ArrayNumbers is ${arrayNumbers[10]}`);

console.log(`============ Step 3 ===================`);

console.log(`Third last element on the given array is : ${arrayNumbers[arrayNumbers.length-3]}`);

console.log(`============ Step 4 ===================`);

function evenNumbers(arr){
    const evenNumbers = [];
    for (const number of arr) {
     if (number % 2 === 0) {
         evenNumbers.push(number);
     }
    }
    return evenNumbers;
 }
 const findEvenNumbers = evenNumbers(arrayNumbers);
 console.log(" Even numbers in the given Array [20,31,40,25,23,11,29,9,60,2,11] is :",findEvenNumbers);
 
 console.log(`============ Step 5 ===================`);

 function oddNumber(arr){
    const oddNumber = [];
    for (const number of arr) {
        if (number % 2 != 0) {
            oddNumber.push(number);
        }
    }
    return oddNumber;
 }
 const findOddNumber = oddNumber(arrayNumbers);
 console.log(" Odd numbers in the given Array [20,31,40,25,23,11,29,9,60,2,11] is :",findOddNumber);
 
 console.log(`============ Step 6 ===================`);

 console.log(" Even positioned Array from the Given Array [20,31,40,25,23,11,29,9,60,2,11] are :",findEvenNumbers);
let sum = 0;
for (const element of findEvenNumbers) {
 sum = sum + element;   
}
console.log(`Sum of Even positioned Array is :${sum}`);

console.log(`============ Step 7 ===================`);

console.log(" Odd numbers in the given Array [20,31,40,25,23,11,29,9,60,2,11] is :",findOddNumber);
 let odd = 0;
 for (const element of findOddNumber) {
    odd = odd + element;
 }
 console.log(`Sum of Odd positioned Array is : ${odd}`);

 console.log(`============ Step 8 ===================`);

let add = 0
for (const element of arrayNumbers) {
    add = add + element;
}
console.log(`Sum of all elements from ArrayNumbers is : ${add}`);

console.log(`============ Step 9 ===================`);

let multi = [];
for (const element of arrayNumbers) {
    if (element % 5 === 0) {
        multi.push(element)
    }
}
console.log("Numbers which are Multiple by 5 from the given array are :",multi)


console.log(`============ Step 10 ===================`);


console.log(`Is number 115 is available in array :${arrayNumbers.includes(115)}`);


console.log(`============ Step 11 ===================`);


console.log(`Is number 23 is available in array :${arrayNumbers.includes(23)}`);


console.log(`============ Step 12 ===================`);


console.log(`Insert number 55,66 at index 3 in array >>`);
arrayNumbers.splice(3,0,55,66)
console.log(arrayNumbers);


console.log(`============ Step 13 ===================`);


console.log(`Delete 3 elements starting from index 4 >> `);
arrayNumbers.splice(4,3)
console.log(arrayNumbers);