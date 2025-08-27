/**cofla ahora debe saber cuales dos aplicacines de 7 debe descargar
 * apps deben tener:
 * cantidad de descarga,
 * puntuacion y 
 * peso
 * se deben poder instalar, abrir, cerrar, y desintalar.
 */

class App {
    constructor(name, downloads, ratings, weight) {
        this.appName = name;
        this.downloads = downloads;
        this.ratings = ratings;
        this.weight = weight;
        this.installation = false;
        this.opened = false;
    }
    appInfo() {
        return `Application name: ${this.appName}\nDownloads: ${this.downloads}\nRatings: ${this.ratings} stars\nSize: ${this.weight}`;
    }
    install() {
        if (this.installation === false) {
            this.installation = true;
            return `${this.appName} is installing....`;
        } return `${this.appName} has already been installed`;
    }
    open() {
        if (this.installation === false) {
            return `${this.appName} cannot open, ${this.appName} is not installed`;
        } else if (this.opened === false) {
            this.opened = true;
            return `${this.appName} is opening...`;
        } return `${this.appName} is already opened`;
    }
    unInstall() {
        if (this.installation === true) {
            this.installation = false;
            this.opened = false;
            return `${this.appName} is uninstalling`;
        } return `${this.appName} is uninstalled`;
    }
    isInstalled() {
        if (this.installation === false) {
            return `${this.appName} is not installed`;
        } return `${this.appName} is installed`
    }
    close() {
        if (this.installation === false) {
            return `cannot close, ${this.appName} has not been installed`;
        } else if (this.opened === true) {
            this.opened = false;
            return `${this.appName} is closing...`;
        } return `${this.appName} is closed, it has not been opened`
    }
    isOpened() {
        if (this.installation === false) {
            return `${this.appName} is closed, it has not been installed`;
        } else if (this.opened === true) {
            return `${this.appName} is up and running`;
        } return `${this.appName} is closed`;
    }
}

const app1 = new App("Snake", "2,342", "4.9", "1.5GB");

console.log(app1.appInfo());
console.log(app1.install());
console.log(app1.isInstalled());
console.log(app1.open());
console.log(app1.isOpened());
console.log(app1.close());
console.log(app1.isOpened());
console.log(app1.unInstall());
console.log(app1.isInstalled());