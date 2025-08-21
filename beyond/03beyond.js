/**
 * Sum of Numbers from 1 to n
Description: Write a function that takes a number n and returns the sum from 1 to n. 
*/

const addition = (n) => {
    let result = 0;
    for (let i = n; i >= 1; i--) {
        result += i;
    } return result
}
console.log(addition(5));