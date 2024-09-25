let num1 = 6;
let num2 = 4;
let num3 = 7;

let result = num1 > num2;

// if (result)
//     console.log("num1 is greater");
// else
//     console.log("num2 is greater");

if (num1 > num2) {
    console.log("num1 is greater");
}
else {
    console.log("num2 is greater");
    console.log("yeee");
}

console.log("Bye...");

if (num1 > num2 && num1 > num3) {
    console.log("num1 is greatest");
}
else if (num2 > num3) {
    console.log("num2 is greatest");
}
else {
    console.log("num3 is greatest");
}