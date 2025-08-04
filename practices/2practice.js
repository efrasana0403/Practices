const Roberto = 1.50;
const Pedro = 1.70;
const Cofla = 3;

const agua = 0.6; // Palito de helado de agua
const crema = 1; // palito de helado de crema 
const heladix = 1.60; //Bombon helado marca heladix
const heladovich = 1.70; // Bombon helado marca heladovich
const helardo = 1.80; // Bombon helado marca helardo
const confites = 2.90; // Potecito de helado de confites
const pote = 2.90; // Pote de 1/4 KG

function addition(a, b, c) {
    return a + b + c
}

let totalAmount = addition(Roberto, Pedro, Cofla)

function HeladoDeAgua(total) {
    if (total >= 0.6) {
        return 'you can buy a palito de helado de agua and your change will be $' + (total - 0.6).toFixed(2);
    }
}
console.log(HeladoDeAgua(totalAmount));

function HeladoDeCrema(total) {
    if (total >= 1) {
        return 'you can buy a palito de helado de crema and your change will be $' + (total - 1).toFixed(2);
    }
}
console.log(HeladoDeCrema(totalAmount));

function bombonHeladix(total) {
    if (total >= heladix) {
        return "you can buy a Bombon helado marca Heladix, and your change'll be $" + (total - heladix)
    }
}
console.log(bombonHeladix(totalAmount));

function bombonheladovich(total) {
    if (total >= heladovich) {
        return "you can buy a Bombon helado marca Heladovich, and your change'll be $" + (total - heladovich)
    }
}
console.log(bombonheladovich(totalAmount));

function bombonHelardo(total) {
    if (total >= helardo) {
        return "you can buy a Bombon helado marca Helardo, and your change'll be $" + (total - helardo);
    }
}
console.log(bombonHelardo(totalAmount));

function conf(total) {
    if (total >= confites) {
        return "you can buy a Potecito de helado de confites and your change'll be $" + (total - confites).toFixed(2);
    }
}
console.log(conf(totalAmount));

function confpote(total) {
    if (total >= pote) {
        return "you can buy a pote de 1/4 KG, and your change'll be $"(total - pote).tofixed(2);
    }
}