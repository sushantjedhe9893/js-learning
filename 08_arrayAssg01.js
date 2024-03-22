console.log(`====================== Step 1 ================================`);
var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
const res = fruits_seasonal[0]
const res2 = fruits_seasonal[4]
console.log(`First element in array is : ${res}`);
console.log(`Last element in array is : ${res2}`);

console.log(`====================== Step 2 ================================`);

var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
fruits_seasonal.unshift("Papaya")
console.log(fruits_seasonal);

console.log(`====================== Step 3 ================================`);

var fruits_seasonal =  ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Before Removing "Mango" `);
console.log(fruits_seasonal);
fruits_seasonal.splice(3,1)
console.log(`After Removing "Mango" `);
console.log(fruits_seasonal);

console.log(`====================== Step 4 ================================`);

var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Orignal Array`);
console.log(fruits_seasonal);
fruits_seasonal.push("Pineapple");
console.log(`After adding element Pineaple `);
console.log(fruits_seasonal);

console.log(`====================== Step 5 ================================`);

var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Orignal Array`);
console.log(fruits_seasonal);
fruits_seasonal.splice(4,0,"Dragon Fruit")
console.log(`After Adding Element "Dragon Fruit`);
console.log(fruits_seasonal);

console.log(`====================== Step 6 ================================`);

var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Orignal Array`);
console.log(fruits_seasonal);
fruits_seasonal.splice(1,1,"Kiwi")
console.log(`After Replacing Element "Orange" with "Kiwi"`);
console.log(fruits_seasonal);

console.log(`====================== Step 7 ================================`);

var fruits_seasonal = ["Banana","Kiwi","Orange","Apple","Mango","Water Melon"];
console.log(`Orignal Array`);
console.log(fruits_seasonal);
const res4 = fruits_seasonal.slice(1,4)
console.log(`After Element print from index 1 to 4`);
console.log(res4);

console.log(`====================== Step 7 ================================`);

var fruits_seasonal = ["Banana","Kiwi","Orange","Apple","Mango","Water Melon"];
console.log(`Orignal Array`);
console.log(fruits_seasonal);
const res5 = fruits_seasonal.slice(3,6)
console.log(`Last three elements are `);
console.log(res5);