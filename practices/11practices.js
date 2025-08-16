//Write a program and continuously ask the user to enter a number or "ok" to exit. 
// Calculate the sum of all the previously entered numbers and display it on the console.

const numbers = [2, 3, 5, 6, 4, 2, 3, 6,];
let total = 0;
const totalNumbers = (arr) => {

    for (const element of arr) {
        total++;
    } return `The total of numbers entered are ${total++}`

}

console.log(totalNumbers(numbers));
let sum = 0;

const entriesSum = (arr) => {
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    } return `The sum of all numbers entered is ${sum}`
}

console.log(entriesSum(numbers));
