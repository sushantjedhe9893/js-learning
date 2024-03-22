const arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`===== Traversing an array using for in loop=======`);
for (const index in arrayNumbers) {
    console.log(arrayNumbers[index]);
}
console.log(`=======Odd index elements===========`);
for (const index in arrayNumbers) {
    if (index%2!=0) {
        console.log(arrayNumbers[index]); 
    }
}