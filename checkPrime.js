

function isPrime(n){
    for (i = 2; i < n; i++){
        //console.log(i, n % i);
        if(n % i == 0){
            return 'Not a Prime number';
        }
        else{
            return 'Your number is a prime Number';
    }   }
}

var result = isPrime(19);
console.log(result);