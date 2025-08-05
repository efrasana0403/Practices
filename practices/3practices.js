const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("whats your name? ", (name) => {
    console.log(`nice to meet you ${name}`);
    rl.question("How old are you? ", (age) => {
        if (parseInt(age) >= 18) {
            console.log(`Congrats ${name}, you can enjoy the party`);
        } else {
            console.log(`I am sorry ${name}, you cannot enter the party. Better luck next time`);
        }
        rl.close();
    })
})