function factorialOfNum(num) {
    if (num === null || num === undefined || typeof num !== 'number' || num < 0) {
        console.log("Invalid input : null");
        return;
    }
    
    if (num === 0 || num === 1) {
        console.log("The factorial of " + num + " is 1");
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= num; i++) {
            factorial *= i;
        }
        console.log("The factorial of " + num + " is " + factorial);
        return factorial;
    }
}

// Example usage:
factorialOfNum(5);        
factorialOfNum(3);        
factorialOfNum(null);    
factorialOfNum(8);        
factorialOfNum(undefined);
factorialOfNum(9);        
factorialOfNum(0);