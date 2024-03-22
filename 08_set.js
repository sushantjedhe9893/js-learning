
const set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(20);
set.add(50);
console.log(set);

console.log(`Total elements in set: ${set.size}`);

console.log(`====== Delete an element =======`);
set.delete(30);
console.log(set);

console.log(`====== To check element available or not =======`);
const is50Available = set.has(50);
console.log(`${is50Available}`);

console.log(`${set.has(100)}`);

console.log(`===== Traversing set ========`);
for (const element of set) {
    console.log(element);
}