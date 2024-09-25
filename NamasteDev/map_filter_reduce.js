const arr = [5, 1, 3, 2, 6];

// Double

// Triple

// Binary

function double(x) {
    return x * 2;
};

function triple(x) {
    return x * 3;
};

function binary(x) {
    return x.toString(2);
};

const output = arr.map(double);

const output3 = arr.map(triple);

const outputb = arr.map(binary);

const outputba = arr.map(function binary(x) {
    return x.toString(2);
});

const outputbaa = arr.map((x) => x.toString(2));

console.log(output);

console.log(output3);

console.log(outputb);

console.log(outputba);

console.log(outputbaa);

function isOdd(x) {
    return x % 2;
};

const outputf = arr.filter(isOdd);

function isEven(x) {
    return x % 2 === 0;
};

const outputfe = arr.filter(isEven);

const outputfa = arr.filter((x) => x % 2);

console.log(outputf);

console.log(outputfe);

console.log(outputfa);

function greaterThan4(x) {
    return x > 4;
};

const outputf4 = arr.filter(greaterThan4);

console.log(outputf4);

const outputf4a = arr.filter((x) => x < 4);

console.log(outputf4a);

// sum value of an array via reduce


function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
};

console.log(findSum(arr));

const outputr = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(outputr);

// maximum value of an array via reduce

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

console.log(findMax(arr));

const outputrm = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);

console.log(outputrm);