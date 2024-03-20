
let arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(arrayNumbers);

console.log(`====== Total Elements or length =========`);
console.log(`${arrayNumbers.length}`);

console.log(`====== Accessing array elements =========`);
const element0 = arrayNumbers[0];
console.log(`0th element is: ${element0}`);
console.log(`3rd index element from the array is : ${arrayNumbers[3]}`);

console.log(`====== Accessing array's last elements =========`);
console.log(arrayNumbers[5]);

console.log(`Accessing last element using length property`);
const len = arrayNumbers.length;
console.log(arrayNumbers[len-1]);

console.log(`====== Update elements =========`);
arrayNumbers[2] = 200;
console.log(arrayNumbers);

console.log(`====== includes() =========`);
console.log(arrayNumbers.includes(7));
console.log(arrayNumbers.includes(100));

console.log(`====== indexOf() =========`);
console.log(arrayNumbers.indexOf(7));
console.log(arrayNumbers.indexOf(700));

console.log(`====== Traversing an array =========`);
const arrayNums = [2, 4, 1, 7, 9, 8];
for (let index = 0; index < arrayNums.length; index++) {
    const element = arrayNums[index];
    console.log(element);
}
console.log(`====== Traversing an array in reverse =========`);
for (let index = arrayNums.length-1; index >=0; index--) {
    const element = arrayNums[index];
    console.log(element); 
}