/**4- Your job is to write a program for a speed camera. For simplicity, ignore the details such as camera, sensors, etc 
// and focus purely on the logic. Write a program that asks the user to enter the speed limit. Once set, 
// the program asks for the speed of a car. If the user enters a value less than the speed limit, program should display Ok 
// on the console. If the value is above the speed limit, the program should calculate the number of demerit points. For every 5km/hr
//  above the speed limit, 1 demerit points should be incurred and displayed on the console. If the number of demerit points is above 12, 
// the program should display License Suspended.
*/


const speedLimit = 40;
const userSpeed = 112;

const speedCamera = (user, limit) => {
    if (user <= limit) {
        return "Ok"
    } else if (user > limit) {
        let overLimit = (user - limit) / 5; // divided by 5, due to 1 demerit point is given per every 5 km/h 
        if (overLimit <= 12) {
            return `You have earned ${Math.floor(overLimit)} demerit points`
        } else if (overLimit > 12) {
            return `You have earned ${Math.floor(overLimit)} demerit points, your license will be suspended`
        }
    }
}
console.log(speedCamera(userSpeed, speedLimit));
