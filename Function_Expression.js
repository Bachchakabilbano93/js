let add = function (num1, num2) {
    return num1 + num2;
};

let sum = add;

let result = sum(5, 6);

let r = add(2, 3);

console.log(result);

console.log(r);

console.log(sum, typeof sum);

console.log(add, typeof add);