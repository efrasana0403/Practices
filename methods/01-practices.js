//perfeccionar calculadora para implementar nuevas funciones. calcular potencias, raices cuadradas y cubicas.

class calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        // this.c = c;
    }
    sum() {
        return `${this.a + this.b} addition`;
    }
    subtract() {
        return `${this.a - this.b} subtration`;
    }
    divide() {
        if (this.a === 0) {
            return "ERROR";
        } return `${this.a / this.b} division`;
    }
    multiply() {
        return `${this.a * this.b} multplication`;
    }
    exponent() {
        return `${this.a ** this.b} exponential`;
    }
    sqrt() {
        return `${Math.sqrt(this.a)} square root`;
    }
    cbrt() {
        return `${Math.cbrt(this.a)} cubic root`;
    }
}

const math = new calculator(5, 2)

console.log(math.sum());
console.log(math.subtract());
console.log(math.divide());
console.log(math.multiply());
console.log(math.exponent());
console.log(math.sqrt());
console.log(math.cbrt());