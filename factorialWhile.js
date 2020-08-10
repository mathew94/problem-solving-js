// factorial of 5! = 1*2*3*4*5 = 120

function factorial(n){
    var i = 1;
    var fact = 1;
    while(i <= n){
        fact = fact * i;
        i++;
    }
    return fact;
}

var result = factorial(6);
console.log(result);