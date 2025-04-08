// calculate sum of all divisers of a number 

function SumOfDivisors(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let total = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                total += j;
            }
        }
        sum += total;
    }
    return sum;


}
console.log(SumOfDivisors(2))
console.log(SumOfDivisors(10))
console.log(SumOfDivisors(15))
