//primeNumbers takes num as input and checks if it's a prime number
function primeNumbers(num) {
    //if it's less than 1 it returns false since pnumbers are greater than 1
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0){
            return false;
    }
}
    return true;
}

function findPrimes(a) {
    // initialize an empty array to store prime numbers
    let prime = [];
    for (let i = 2;i<=a;i++) {
        if (primeNumbers(i)){
             prime.push(i);
    }
}
//returns the array containing the prime numbers
    return prime;
}