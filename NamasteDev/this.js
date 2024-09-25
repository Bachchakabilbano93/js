"use strict";

// this keyword works differently in strict and non strict mode inside a function

// this in global space

console.log(this); //glpbalObject --> window in case of browsers, global in Node.js

// this inside a function

function x() {
    // the value depends on strict / non strict mode
    console.log(this);
}
// x();

// this inside non-strict mode - (this substitution) --> If the value of this keyword is undefined or null, this keyword will be replaced with globalObject only in non strict mode

// this keyword value depends on how this/the function is called (window)

x(); // undefined 
// window.x(); // window

// this inside a object's method

const obj = {
    a: 10,
    x: function () {
        console.log(this);
        console.log(this.a);
    },
};

obj.x();

const obj2 = {
    a: 20,
};

// call apply bind methods (sharing methods)

const student = {
    name: "Abir",
    printName: function () {
        console.log(this);
        console.log(this.name);
    },
};

student.printName();

const student2 = {
    name: "Rajashree Bhadra",
};

student.printName.call(student2); // value of this = student2

// this inside arrow function --> arrow functions do not have their own this, retains the this value of the enclosing lexical context

console.log(this);

const obj3 = {
    a: 10,
    x: () => {
        console.log(this);
    },
};

obj3.x();

// this inside nested arrow function

const obj4 = {
    a: 20,
    x: function () {
        //enclosing lexical context
        // console.log(this);
        const y = () => {
            console.log(this);
        };
        y();
    },
};

obj4.x();

// this inside DOM elements => reference to HTMLelement

// this inside class, constructor