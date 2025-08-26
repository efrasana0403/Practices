class Cellphone {
    constructor(color, weight, cmraRes, scrnRes, ram,) {
        this.color = color;
        this.weight = weight;
        this.cameraResolution = cmraRes;
        this.screenResolution = scrnRes;
        this.ramMemory = ram;
        this.power = false;
    }
    information() {
        return `Phone information:
- Weight: ${this.weight}
- Color: ${this.color}
- Camera Resolution: ${this.cameraResolution}
- Screen Resolution: ${this.screenResolution}
- RAM: ${this.ramMemory}
- Power: ${this.power ? "On" : "Off"}
        `.trim();
    }
    isPoweredOn() {
        if (this.power === false) {
            return "phone is turned off";
        } else {
            return "phone is turned on";
        }
    }
    powerOnOff() {
        if (this.power === false) {
            this.power = true;
            return "phone is turned on";
        } else {
            this.power = false;
            return "phone is turned off";
        }
    }
    restart() {
        if (this.power === true) {
            return "phone is restarting";
        } else {
            this.power = true;
            return "phone is turning on";
        }
    }
}

const iPhone25 = new Cellphone("red", "150g", "12 megapixels", "high resolution", "4GB")

console.log(iPhone25.powerOnOff()); // Phone is turned on
// console.log(iPhone25.powerOnOff()); // Phone is turned off
// console.log(iPhone25.isPoweredOn()); // Phone is turned off
// console.log(iPhone25.restart());     // Phone is turning on
// console.log(iPhone25.isPoweredOn()); // Phone is turned on
// console.log(iPhone25.information()); //outputs phone info 

class HighGammaCellphone extends Cellphone {
    constructor(color, weight, cmraRes, scrnRes, ram, xtraCmra) {
        super(color, weight, cmraRes, scrnRes, ram);
        this.xtraCameraRes = xtraCmra;
    }
    HGInformation() {
        return `
        ${this.information()}
-Extra camara resolution: ${this.xtraCameraRes}
        `.trim()
    }
}
const iPhone25Pro = new HighGammaCellphone("black", "100g", "14 Megapixels", "4K resolution", "8GB", "20 Megapixels");
// console.log(iPhone25Pro.HGInformation()); // outputs phone info 

/**I can can call a function from the parent class on an object in the inherited class
 * I can use .trim() to remove all spaces from a string
 * classes starts with caps by convention
 * constroctor(), super(), and methods() are created within the class
 * used `class "inheritedClass" extends "parent class"{}` to connect son and parents classes
 * used super () to inherit properties from the parento onto the son class.
*/