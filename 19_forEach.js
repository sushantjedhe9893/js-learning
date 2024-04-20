let array = [2, 4, 1, 7, 9, 8];

array.forEach((element, index, array) => {
    console.log(element,index,array);
});
console.log(`==== forEach to even numbers =====`);
array.forEach(element => {
    if(element%2==0){
        console.log(element);
    }
});

