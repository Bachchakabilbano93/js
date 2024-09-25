// console.log("Hello World!!");

let num = 4;
console.log(num);

num = 9
console.log(num);

let username = "Abir's Account";
console.log(username);

// variable name
// can have characters
// can have numbers except first position
// can have special symbols $ and _
// Snake Casing(user_name) & Camel Casing(userName)

let radius = 5;
const pi = 3.14;
let area;

radius = 6;
area = pi * radius * radius;

console.log(area);

let data = 8;
let user = "Abir";

let num1 = 7.8;
console.log(typeof user);

let num2 = 0xff;
console.log(num2);

let num3 = 100_00_000;
console.log(num3);

let num4 = 5 / 0;
console.log(num4);

let num5 = -5 / 0;
console.log(num5);

console.log(Number.MAX_VALUE);

let num6 = 10505050505050505050505050501n; //BigInt
// console.log(num6 + 2);//TypeError
console.log(num6 + 2n);

let firstName = "Abir";
let lastName = "Bhattacharya";

let fullName = firstName + " " + lastName;

console.log(fullName);

let admin = "Ab\tir \nBhattacharya \"SDET\"";

console.log(admin);

let bool = 5 < 6;

console.log(bool);
console.log(typeof bool);

let student = null;

console.log(student);
console.log(typeof student);//Object

let dbadmin;

console.log(dbadmin);
console.log(typeof dbadmin);

let number = 5;

console.log(5 / "Abir");
console.log(typeof (5 / "Abir"));//NaN is a type of number

let pin = String(6); //Explicit Conversion

console.log(num, typeof pin);

let zip = Number("123"); //Explicit Conversion

console.log(zip, typeof zip);

//Type Coercion

let x;

console.log(x, typeof x);

x = 8;

console.log(x, typeof x);

x = x + "";

console.log(x, typeof x);

x = +x + 2;

// x = x + 2;

console.log(x, typeof x);

x = x - 2;

console.log(x, typeof x);

x = !x;

console.log(x, typeof x);

console.log(Boolean(0));

console.log(Boolean(undefined));

console.log(Boolean(null));

console.log(Boolean("Abir"));

let a = parseInt("123 Navin");

console.log(a);

