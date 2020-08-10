// 10! = 1*2*3*4*5*6*7*8*9*10
// 10! = 10*9*8*7*6*5*4*3*2*1
// 0! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 4!*5 [aivabeo bolte pari abar 1*2*3*4*5 atao bolte pari]
// 6! = (6-1)!*6 [avabeo bolte pari]
// 7! = (7-1)!*7
// n! = (n-1)!*n [uporer ta bolte parle ami atao bolte pari. n er man ja hbe tar theke 1 - kore oitar factorial multiply hbe n number er shathe e]

function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1); 
    }
}

var result = factorial(5);
console.log(result);