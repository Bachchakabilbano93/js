let nums = [42, 51, 24, 98, 65, 12];

nums.forEach(n => {
    console.log(n * 2);
});

nums.forEach((m, i, nums) => {
    console.log(m, i, nums);
});

console.log(nums);