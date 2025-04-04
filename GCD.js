// find GCD of two numbers 
// using Euclidean algorithm
// Time complexity: O(log(min(a, b)))
// Space complexity: O(1)
//
// Example: GCD(48, 18) = 6
// Brouteforce method: O(min(a, b))

// function gcd(a, b) {

//     let gcdV = 1; // Initialize gcd to 1
//     for(let i=0; i<=Math.min(a,b);i++){
//         if(a%i==0 && b%i==0){
//             gcdV = i; // Update gcd if i is a common divisor
//         }
//     }
//     return gcdV; // Return the final gcd value   
// }

function gcd(a, b) {

    while (a > 0 && b > 0) {
        if (a > b) {
            a = a % b; // Reduce a
        } else {
            b = b % a; // Reduce b
        }
    }
    if (a === 0) return b; // If a is 0, return b
    return a; // If b is 0, return a
}


// Alternative method using recursion (Euclidean algorithm)

// function gcd(a, b){
//     if (b === 0) return a; // base case
//     return gcd(b, a % b); // recursive case
// }

console.log(gcd(48, 18)); // 6
console.log(gcd(56, 98)); // 14
