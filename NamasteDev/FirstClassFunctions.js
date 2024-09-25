a();
// b();

// Function Statement aka Function Declaration
function a() {
    console.log("a called");
}
a();

// Function Expression
var b = function () {
    console.log("b called");
}
b();

// Anonymous Function -> Used in places where functions are used as values, cannot be used in Function Statement, Below function gives Syntax Error
/*function () {

}*/

// Named Function Expression
var b = function xyz() {
    console.log("b called");
}
a();
b();
// xyz();

var b = function xyz() {
    console.log(xyz);
}
b();

// Difference between Parameters & Arguments
var b = function (param1, param2) { // param1 and param2 are local variables inside the function
    console.log("b called");
}
b(1, 2);

// First Class Functions -> The ability to use functions as values, can be passed as an argument to another function and can be returned from another function
var b = function (param1, param2) { // param1 and param2 are local variables inside the function
    console.log("b called");
    console.log(param2);
}
b(function () {

});

var b = function (param1) {
    console.log(param1);
}
b(function () {

});

var b = function (param1) {
    console.log(param1);
}
function xyz() {

}
b(xyz);

var b = function (param1) {
    return function () {

    }
}
console.log(b());

var b = function (param1) {
    return function xyz() {

    }
}
console.log(b());

//Functions are First Class Citizens same as First Class Functions

// Arrow Functions