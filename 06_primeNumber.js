function isPrime(num){

    for (let index = 2; index < num; index++) {
   
      if (num%index==0) {
   
       return false;
   
      } 
   
    }
   
    return true;
   
   }
   
   const result = isPrime(7);
   
   console.log(`Is 7 Prime Number : ${result}`);
   
   const result1 = isPrime(9);
   
   console.log(`Is 9 Prime Number : ${result1}`);

   const result2 = isPrime(11);
   
   console.log(`Is 11 Prime Number : ${result1}`);

  
