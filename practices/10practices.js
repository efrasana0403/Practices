// Write a program to count how many numbers between 1 and 100 are divisible by 3 with no remainder. Display the count on the console

const arr = Array.from({ length: 100 }, (_, i) => i + 1);
let count = 0;

for (const element of arr) {
    if (Number.isInteger(element / 3)) {
        count++;
    }

}

console.log(count);

// i did not know about Number.isInterger method, had to cheat