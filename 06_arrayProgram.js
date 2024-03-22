const arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`==== Even index elements =======`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayNumbers[index];
        console.log(element);
    }
    
    
}

const arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`==== Sum an array elements =======`);
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];  
    sum = sum + element;
}
console.log(`Sum of an array is: ${sum}`);
