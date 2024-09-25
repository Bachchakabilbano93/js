//Type Conversion --> Explicit
let number1 = String(6)

console.log(number1, typeof number1)

let number2 = Number("123")

console.log(number2, typeof number2)

console.log(Boolean(7))

console.log(Boolean(-7))

console.log(Boolean(0))

console.log(Boolean(null))

console.log(Boolean(undefined))

console.log(Boolean("Abir"))

//Type Coercion

let x

console.log(x, typeof x);

x = 8

console.log(x, typeof x);

x = x + ""

console.log(x, typeof x);

// x = x - 2 //Will Output 6 number
// x = x + 2 //Will Output 82 string
x = +x + 2 //Will Output 10

console.log(x, typeof x);

x = x + "AB"

console.log(x, typeof x);

x = x - 3

console.log(x, typeof x); //Output will be NaN number

let y

y = 7

y = !y

console.log(y, typeof y);

let z = parseInt("123 Abir")

console.log(z);

let a = parseInt("N123 Abir")

console.log(a);//Will output NAN