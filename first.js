// console.log("Hello World!!")
let num = 4
console.log(num);

num = 9
console.log(num);

let userName = "Abir";
console.log(userName);

let radius = 5
const pi = 3.14
let area

area = pi * radius * radius

console.log(area)
console.log(typeof userName)

let num1 = 0xf
let num2 = 0xff
let num3 = 1.5e12
let num4 = 5 / 0
let num5 = -5 / 0

console.log(num1, num2, num3, num4, num5)

console.log(Number.MAX_VALUE)

let num6 = 1050505050505050505050505050505051n  //Big Int

console.log(num6)
// console.log(num6 + 2) //Error: TypeError: Cannot mix BigInt and other types, use explicit conversions

console.log(num6 + 2n)

let firstName = "Abir"
let lastName = "Bhattacharya"

let user = firstName + " " + lastName

console.log(user)

let subject = "Ab\tir \nBhattacharya \"786\""

console.log(subject)

let bool = 5 > 6

console.log(bool)
console.log(typeof bool)

let player = null

console.log(player)
console.log(typeof player)

let emp

console.log(emp)
console.log(typeof emp)

let number = 5

console.log(5 / "Abir") //Will output NaN
console.log(typeof (5 / "Abir")) //Will output number, NaN is a type of number