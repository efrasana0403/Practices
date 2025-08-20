/**
 1- FizzBuzz
Description: Write a function that prints numbers from 1 to 20.
If the number is divisible by 3, print "Fizz".
If divisible by 5, print "Buzz".
If divisible by both, print "FizzBuzz".
// Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, ...
 */

const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

const FizzBuzz = (arr) => {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
            arr[index] = "FizzBuzz";
        } if (arr[index] % 3 === 0) {
            arr[index] = "fizz";
        } if (arr[index] % 5 === 0) {
            arr[index] = "buzz";
        }

    } return arr

}

console.log(FizzBuzz(numbers)); /** outputs: [
  1,      2,      'fizz', 4,
  'buzz', 'fizz', 7,      8,
  'fizz', 'buzz', 11,     'fizz',
  13,     14,     'fizzBuzz', 16,
  17,     'fizz', 19,     'buzz'
] */
