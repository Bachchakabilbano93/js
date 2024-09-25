//Hoisting
// function greet(u) {
//     console.log(user);
//     return `Hello ${u}!!`;
// };

// let user = "Abir";
// let str = greet(user)
// console.log(str);

let user = "Abir";

function greet(u) {
    let num = 5
    console.log(num);
    console.log(user);
    return `Hello ${u}!!`;
};

// console.log("num value is " + num);//Error as num is local variable defined in the greet function
let str = greet(user)
console.log(str);

function addition(num1, num2, num3) {
    console.log(num1, num2, num3);
    return num1 + num2 + num3;
};

let total = addition(5, 6);
console.log(total);//Will output NaN

//Default value for num3, default value is applicable when argument is not there
function add(num4, num5, num6 = 1) {
    console.log(num4, num5, num6);
    return num4 + num5 + num6;
};

let r = add(5, 6, 5)
let result = add(5, 6);
console.log(r);
console.log(result);
