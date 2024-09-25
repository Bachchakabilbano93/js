let nums = [42, 51, 24, 98, 65, 12];

// console.log(nums.filter(n => n % 2 === 0));

let result = nums.filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((a, b) => a + b);
// .forEach(n => {
//     console.log(n);
// });

console.log(result);