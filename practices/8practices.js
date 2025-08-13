//2- Write a program which takes two numbers from the console and displays the maximum of the two.

const greatNumber = (x, y) => {
    if (x > y) {
        return `${x} is greater than ${y}`
    } else { return `${y} is greater than ${x}` }
}

// greatNumber(x, y) WORKS

const greatNumber1 = (x, y) => {
    return x > y ? `${x} is greater than ${y}` : `${y} is greater then ${x}`
}

// greatNumber() WORKS