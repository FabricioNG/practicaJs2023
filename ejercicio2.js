const num1 = 3;
const num2 = 4;
const num3 = 5;

let mayor

if (num1 > num2 && num1 > num3) {
    console.log(num1 +" es el mayor");
} else {
    if (num2 > num3) {
        console.log(num2+" es el mayor");
    } else {
        console.log(num3+" es el mayor");
    }
}