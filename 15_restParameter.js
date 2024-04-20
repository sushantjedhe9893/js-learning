function add(n1, ...values){
    console.log(n1);
    console.log(values);
}
add(5, 6, 7, 8);

function division(n1, n2=1){
    console.log(`n1: ${n1}, n2: ${n2}`);
    console.log(n1/n2);
}
division(2, 5);
division(7)