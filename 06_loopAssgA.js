console.log(`1. Count the total number of vowels including small & capital using for loop`);

const word = "I am very good IT developer";
const vowels = "aeiou";
let vowelsCount = 0;
for (let index = 0; index < word.length; index++) {
    let char = word.charAt(index);
    let lowerCase = char.toLowerCase();
    if (vowels.includes(lowerCase)) {
        vowelsCount++;
    }
    
}
console.log(`-> The count is :${vowelsCount}`);

console.log(`2. Write a fn to get sum of cube of numbers from 1 to 5`);

let sum = 0;
for (let index = 0; index <=5; index++) {
    sum = sum + index * index * index;
    
}
console.log(`-> ${sum}`);

console.log(`3. Odd position chars of string1`);

function oddPositionedChars(word){
for (let index = 0; index < word.length; index++) {
    const element = word.charAt(index);
    if(index%2!=0 && element != " "){
        console.log(element);
    }
    
}

}
oddPositionedChars("Hard work always pays back")

console.log(`3. Odd position chars of string2`); 


function oddPositionedChars(word){
    for (let index = 0; index < word.length; index++) {
        const element = word.charAt(index);
        if(index%2!=0 && element != " "){
            console.log(element);
        }
        
    }
    
    }
oddPositionedChars("Soon i will be  UI IT Champ")