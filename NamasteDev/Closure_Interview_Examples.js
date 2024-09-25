function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    }
    return inner;
}
outer()(); //As the outer function returnd inner, the 2nd parenthesis will run the inner function

var close = outer();
close();

//Still a Closure
function outer1() {
    function inner1() {
        console.log(a);
    }
    var a = 10;
    return inner1;
}

outer1()();

function outer2() {
    function inner2() {
        console.log(a);
    }
    let a = 10;
    return inner2;
}

outer2()();

function outer3(b) {
    function inner3() {
        console.log(a, b);
    }
    let a = 10;
    return inner3;
}

var close3 = outer3("helloworld");
close3();

function outest() {
    var c = 20;
    function outer4(b) {
        function inner4() {
            console.log(a, b, c);
        }
        let a = 10;
        return inner4;
    }
    return outer4;
}
// let a = 100;

var close4 = outest()("helloworld");
// var close4 = (outest())("helloworld");
close4();

function outest1() {
    var c = 20;
    function outer5(b) {
        function inner5() {
            console.log(a, b, c);
        }
        // let a = 10;
        return inner5;
    }
    return outer5;
}
let a = 100;

var close5 = outest1()("helloworld");
// var close4 = (outest())("helloworld");
close5();