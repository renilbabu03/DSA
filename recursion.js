// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

var index = 0;
var value = 0;
function fibonacciRecursive(n) {
    if(n==0){
        return 0;
    }
    
    return value + fibonacciRecursive(n-1)
    //code here;
}

console.log(fibonacciRecursive(3))