// Write a program and ask the user to enter a series of numbers separated by comma. 
// Find the maximum of the numbers and display it on the console. For example, if the user enters “5, 3, 8, 1, 4", the program should display 8.

const numbers = [3, 5, 7, 4, 5, 8, 2,]

const greatestNumber = (arr) => {
    let greatest = [0];
    for (const element of arr) {
        greatest = greatest > element ? greatest : element
    } return `The greatest number of entered numbers is ${greatest}`
}

console.log(greatestNumber(numbers));
