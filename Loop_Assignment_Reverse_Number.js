let num1 = 564782
let num2 = 0

while (num1 > 0) {

    let res = num1 % 10;
    num2 = num2 * 10 + res;
    num1 = parseInt(num1 / 10);

}

console.log(num2);