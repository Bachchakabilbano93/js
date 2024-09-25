let nums = [5, 7, 2, 4];
console.log(nums);
// let [a, b, c, d] = nums;
let [a, b, , d] = nums;

console.log(d);

let e = 5;
let f = 6;

[e, f] = [f, e];//Value swap with Array Destructuring

console.log(e, f)

let words = "My name is Abir Bhattacharya SDET SDE".split(" ");

let [p, q, r, s, t, u, v] = words;

console.log(words);

console.log(p, q, r, s, t, u, v);

let [i, j, , ...k] = words;

console.log(i, j, k);