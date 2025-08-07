function calculate(a, b, operationFn) {
    return operationFn(a, b);
}


// Define operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
// Usage
console.log(calculate(10, 2, add));        // 12
console.log(calculate(10, 2, subtract));   // 8
console.log(calculate(10, 0, divide));   // infinite
console.log(calculate(10, 2, multiply));   // 20
