// let values = new Array();

let values = [5, 7, 8];

console.log(values.length);

let v = [];

v.push(5);
v.push(7);

console.log(v);

console.log(values[3]);//Output is undefined

let names = ["Abir", "John", "Dev"];

names[3] = "Raj"

console.log(names);

let data = ["Abir", 5, { tech: "JS" }, function () { console.log("Hello World"); }];

console.log(data[2]);

data[3]();

data[2].tech = "Java";

console.log(data);