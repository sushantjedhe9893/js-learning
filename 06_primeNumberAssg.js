

function isPrime(array){

    for (let index = 2; index < array; index++) {
        if (array % index == 0) {
            
        }
        return false;
    }
    return true;
}
const result = isPrime(array = [3,9,7,6,19,29,53])
console.log(result);