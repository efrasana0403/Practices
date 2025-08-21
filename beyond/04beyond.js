/**
 * 4- Write a program and ask the user to enter a number. Compute the factorial of the number and print it on the console.
 *  For example, if the user enters 5, the program should calculate 5 x 4 x 3 x 2 x 1 and display it as 5! = 120.
 */

const factOf = (n) => {
    let product = 1;
    for (let i = n; i >= 1; i--) {
        product *= i;
    } return `${n}! = ${product}`
}

console.log(factOf(5));