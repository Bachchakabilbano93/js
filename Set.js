let nums = new Set("bookkeeper");

console.log(nums);

let values = new Set();

values.add(3);
values.add(4);
values.add(3);
values.add("Abir");
values.add("John");
values.add("Karan");

console.log(values);

for (let n of values) {
    console.log(n);
};

values.forEach(value => {
    console.log(value);
});

console.log(values.has(3));