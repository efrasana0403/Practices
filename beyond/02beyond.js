/**Count Vowels
Description: Return the number of vowels in a string.
 Hint: Loop through the string and check if each character is a vowel (a, e, i, o, u). 
*/


// const countVowels = (string) => {
//     let vowelCount = 0;
//     for (letter of string) {
//         if (letter.toLowerCase() === "a") {
//             vowelCount++;
//         } if (letter.toLowerCase() === "e") {
//             vowelCount++;
//         } if (letter.toLowerCase() === "i") {
//             vowelCount++;
//         } if (letter.toLowerCase() === "o") {
//             vowelCount++;
//         } if (letter.toLowerCase() === "u") {
//             vowelCount++;
//         };
//     } return `There are ${vowelCount} vowels in the word ${string}`;
// }

const vowels = ["a", "e", "i", "o", "u"]

const countVowels = (word) => {
    let vowelCount = 0;
    let consCount = 0;
    for (letter of word) {
        if (vowels.includes(letter.toLowerCase())) {
            vowelCount++
        } if (!vowels.includes(letter.toLowerCase())) {
            consCount++
        }
    } return `There are ${vowelCount} vowels and ${consCount} consonants in the word ${word}`;
}
console.log(countVowels("Andrea y Armando"));

// .includes(value to compare)   is used to check if a string or array contains a specific value.
// can use !"variable".includes() as well. I used it to determined how many consonants there are in a string